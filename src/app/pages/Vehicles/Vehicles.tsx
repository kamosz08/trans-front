/* eslint-disable react/display-name */
import { RouteComponentProps } from '@reach/router';
import React, { useMemo, useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Column } from 'react-table';
import { toast } from 'react-toastify';
import { Table } from '@app/components/ui/Table';
import { Button } from '@app/components/ui/Button';
import { Vehicle } from './api/vehiclesService';
import { useVehiclesQuery } from './api/useVehiclesQuery';
import { useVehiclesMutations } from './api/useVehiclesMutations';
import { ManageVehicleModal } from './ManageVehicleModal';

interface Props extends RouteComponentProps {}
type ModalState = {key: 'add'} | {key: 'update', vehicle: Vehicle} | null;

export const Vehicles: React.FC<Props> = () => {
  const [modal, setModal] = useState<ModalState>(null);
  const { vehiclesQuery } = useVehiclesQuery();
  const { deleteVehicleMutation } = useVehiclesMutations();

  const handleDeleteVehicle = (row: Vehicle) => () => {
    deleteVehicleMutation.mutate(row._id, {
      onSuccess: () => {
        toast.success('Vehicle deleted successfully');
      },
    });
  };

  const columns: Column[] = useMemo(() => [
    {
      Header: 'Registration',
      accessor: 'registration',
    },
    {
      Header: 'Class',
      accessor: 'class',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className="flex">
          <FaTrash
            className="cursor-pointer mx-6"
            onClick={handleDeleteVehicle(row.original as Vehicle)}
          />
          <FaPencilAlt
            className="cursor-pointer mx-6"
            onClick={() => setModal({ key: 'update', vehicle: row.original as Vehicle })}
          />
        </div>
      ),
    },
  ], []);

  return (
    <div className="w-full py-6 px-8">
      <div className="w-full flex justify-end">
        <Button onClick={() => { setModal({ key: 'add' }); }}>+ Add vehicle</Button>
      </div>
      <div className="mt-8">
        <Table
          columns={columns}
          data={vehiclesQuery.data?.data || []}
        />
      </div>
      {modal?.key === 'add' && (
        <ManageVehicleModal
          handleClose={() => { setModal(null); }}
        />
      )}
      {modal?.key === 'update' && (
        <ManageVehicleModal
          handleClose={() => { setModal(null); }}
          vehicle={modal.vehicle}
        />
      )}
    </div>
  );
};
