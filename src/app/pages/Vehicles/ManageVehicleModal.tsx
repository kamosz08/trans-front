import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from '@app/components/ui/Modal';
import { FormInput } from '@app/components/ui/FormInput';
import { useVehiclesMutations } from './api/useVehiclesMutations';
import { Vehicle } from './api/vehiclesService';

interface Props {
  handleClose: ()=>void;
  vehicle?: Vehicle;
}

interface FormValues {
  class: string;
  registration: string;
}

const validationSchema: yup.SchemaOf<FormValues> = yup.object({
  class: yup.string().min(2).required().label('Class'),
  registration: yup.string().min(2).required().label('Registration'),
});

export const ManageVehicleModal = ({ handleClose, vehicle }: Props) => {
  const initialValues: FormValues = {
    class: vehicle?.class || '',
    registration: vehicle?.registration || '',
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
  const { createVehicleMutation, updateVehicleMutation } = useVehiclesMutations();

  const onSubmit = (submitValues: FormValues) => {
    if (!vehicle) {
      createVehicleMutation.mutate({
        class: submitValues.class,
        registration: submitValues.registration,
      }, {
        onSuccess: () => {
          toast.success('Vehicle has been added');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while adding vehicle');
        },
      });
    } else {
      updateVehicleMutation.mutate({
        id: vehicle._id,
        payload: {
          class: submitValues.class,
          registration: submitValues.registration,
        },
      }, {
        onSuccess: () => {
          toast.success('Vehicle has been updated');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while updating vehicle');
        },
      });
    }
  };

  return (
    <Modal
      title={vehicle ? 'Edit vehicle' : 'Add vehicle'}
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
            name="class"
            label="Class"
            register={register}
            error={errors.class}
          />
          <FormInput
            name="registration"
            label="Registration"
            register={register}
            error={errors.registration}
          />
        </div>

      </form>
    </Modal>
  );
};
