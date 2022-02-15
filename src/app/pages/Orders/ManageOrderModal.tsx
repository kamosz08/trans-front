import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from '@app/components/ui/Modal';
import { FormInput } from '@app/components/ui/FormInput';
import { FormSelect } from '@app/components/ui/FormSelect';
import { useDriversQuery } from '../Drivers/api/useDriversQuery';
import { useVehiclesQuery } from '../Vehicles/api/useVehiclesQuery';
import { useOrdersMutations } from './api/useOrdersMutations';
import { Order } from './api/ordersService';

interface Props {
  handleClose: ()=>void;
  order?: Order;
}

interface FormValues {
  name: string;
  price: number | null;
  driverId: string | null;
  vehicleId: string | null;
}

const validationSchema: yup.SchemaOf<FormValues> = yup.object({
  name: yup.string().min(2).required().label('Name'),
  price: yup.number().min(1).required().label('Price'),
  driverId: yup.string().required().label('Driver'),
  vehicleId: yup.string().required().label('Vehicle'),
});

export const ManageOrderModal = ({ handleClose, order }: Props) => {
  const { driversQuery } = useDriversQuery();
  const { vehiclesQuery } = useVehiclesQuery();
  const initialValues: FormValues = {
    name: order?.name || '',
    price: order?.price || null,
    driverId: order?.driverId || null,
    vehicleId: order?.vehicleId || null,
  };
  const {
    register, handleSubmit, formState: {
      errors, isValid, isSubmitted,
    },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const { createOrderMutation, updateOrderMutation } = useOrdersMutations();

  const onSubmit = (submitValues: FormValues) => {
    if (!order) {
      createOrderMutation.mutate({
        name: submitValues.name,
        price: submitValues.price!,
        driverId: submitValues.driverId!,
        vehicleId: submitValues.vehicleId!,
      }, {
        onSuccess: () => {
          toast.success('Order has been added');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while adding order');
        },
      });
    } else {
      updateOrderMutation.mutate({
        id: order._id,
        payload: {
          name: submitValues.name,
          price: submitValues.price!,
          driverId: submitValues.driverId!,
          vehicleId: submitValues.vehicleId!,
        },
      }, {
        onSuccess: () => {
          toast.success('Order has been updated');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while updating order');
        },
      });
    }
  };

  return (
    <Modal
      title={order ? 'Edit order' : 'Add order'}
      onCancel={handleClose}
      onOk={handleSubmit(onSubmit)}
      okDisabled={!isValid || isSubmitted}
    >
      <form
        className="relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <FormInput
            name="name"
            label="Name"
            register={register}
            error={errors.name}
          />
          <FormInput
            name="price"
            label="Price"
            register={register}
            error={errors.price}
          />
          <FormSelect
            name="driverId"
            label="Driver"
            register={register}
            error={errors.driverId}
            options={driversQuery.data?.data.map((d) => ({ value: d._id, label: `${d.firstName} ${d.lastName}` })) || []}
          />
          <FormSelect
            name="vehicleId"
            label="Vehicle"
            register={register}
            error={errors.vehicleId}
            options={vehiclesQuery.data?.data.map((v) => ({ value: v._id, label: v.registration })) || []}
          />
        </div>

      </form>
    </Modal>
  );
};
