/* eslint-disable react/display-name */
import { RouteComponentProps } from '@reach/router';
import React, { useMemo, useState } from 'react';
import { Column } from 'react-table';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Button } from '@app/components/ui/Button';
import { Table } from '@app/components/ui/Table';
import { ManageDriverModal } from './ManageDriverModal';
import { useDriversQuery } from './api/useDriversQuery';
import { Driver } from './api/driversService';
import { useDriversMutations } from './api/useDriversMutations';

interface Props extends RouteComponentProps {}
type ModalState = {key: 'add'} | {key: 'update', driver: Driver} | null;

export const Drivers: React.FC<Props> = () => {
  const [modal, setModal] = useState<ModalState>(null);
  const { driversQuery } = useDriversQuery();
  const { deleteDriverMutation } = useDriversMutations();

  const handleDeleteDriver = (row: Driver) => () => {
    deleteDriverMutation.mutate(row._id, {
      onSuccess: () => {
        toast.success('Driver deleted successfully');
      },
    });
  };

  const columns: Column[] = useMemo(() => [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className="flex">
          <FaTrash
            className="cursor-pointer mx-6"
            onClick={handleDeleteDriver(row.original as Driver)}
          />
          <FaPencilAlt
            className="cursor-pointer mx-6"
            onClick={() => setModal({ key: 'update', driver: row.original as Driver })}
          />
        </div>
      ),
    },
  ], []);

  return (
    <div className="w-full py-6 px-8">
      <div className="w-full flex justify-end">
        <Button onClick={() => { setModal({ key: 'add' }); }}>+ Add driver</Button>
      </div>
      <div className="mt-8">
        <Table
          columns={columns}
          data={driversQuery.data?.data || []}
        />
      </div>
      {modal?.key === 'add' && (
        <ManageDriverModal
          handleClose={() => { setModal(null); }}
        />
      )}
      {modal?.key === 'update' && (
        <ManageDriverModal
          handleClose={() => { setModal(null); }}
          driver={modal.driver}
        />
      )}
    </div>
  );
};
