/* eslint-disable react/display-name */
import { RouteComponentProps } from '@reach/router';
import React, { useMemo, useState } from 'react';

import {
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa';
import { Column } from 'react-table';
import { toast } from 'react-toastify';
import { Table } from '@app/components/ui/Table';
import { Button } from '@app/components/ui/Button';
import { Order } from './api/ordersService';
import { useOrdersMutations } from './api/useOrdersMutations';
import { useOrdersQuery } from './api/useOrdersQuery';
import { ManageOrderModal } from './ManageOrderModal';

interface Props extends RouteComponentProps {}

type ModalState = {key: 'add'} | {key: 'update', order: Order} | null;

export const Orders: React.FC<Props> = () => {
  const [modal, setModal] = useState<ModalState>(null);
  const { ordersQuery } = useOrdersQuery();
  const { deleteOrderMutation } = useOrdersMutations();

  const handleDeleteOrder = (row: Order) => () => {
    deleteOrderMutation.mutate(row._id, {
      onSuccess: () => {
        toast.success('Order deleted successfully');
      },
    });
  };

  const columns: Column[] = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Driver',
      accessor: 'driver',
      Cell: ({ row }) => `${(row.original as Order).driver.firstName} ${(row.original as Order).driver.lastName}`,
    },
    {
      Header: 'Vehicle',
      accessor: 'vehicle',
      Cell: ({ row }) => `${(row.original as Order).vehicle.registration}`,
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className="flex">
          <FaTrash
            className="cursor-pointer mx-6"
            onClick={handleDeleteOrder(row.original as Order)}
          />
          <FaPencilAlt
            className="cursor-pointer mx-6"
            onClick={() => setModal({ key: 'update', order: row.original as Order })}
          />
        </div>
      ),
    },
  ], []);

  return (
    <div className="w-full py-6 px-8">
      <div className="w-full flex justify-end">
        <Button onClick={() => { setModal({ key: 'add' }); }}>+ Add order</Button>
      </div>
      <div className="mt-8">
        <Table
          columns={columns}
          data={ordersQuery.data?.data || []}
        />
      </div>
      {modal?.key === 'add' && (
        <ManageOrderModal
          handleClose={() => { setModal(null); }}
        />
      )}
      {modal?.key === 'update' && (
        <ManageOrderModal
          handleClose={() => { setModal(null); }}
          order={modal.order}
        />
      )}
    </div>
  );
};
