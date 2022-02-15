import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from '@app/components/ui/Modal';
import { FormInput } from '@app/components/ui/FormInput';
import { useDriversMutations } from './api/useDriversMutations';
import { Driver } from './api/driversService';

interface Props {
  handleClose: ()=>void;
  driver?: Driver;
}

interface FormValues {
  firstName: string;
  lastName: string;
  idNumber: number|null;
}

const validationSchema: yup.SchemaOf<FormValues> = yup.object({
  firstName: yup.string().min(2).required().label('First name'),
  lastName: yup.string().min(2).required().label('Last name'),
  idNumber: yup.number().test('len', 'Must be exactly 11 characters', (val) => String(val).length === 11).required()
    .label('Pesel'),
});

export const ManageDriverModal = ({ handleClose, driver }: Props) => {
  const initialValues: FormValues = {
    firstName: driver?.firstName || '',
    lastName: driver?.lastName || '',
    idNumber: driver?.pesel || null,
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
  const { createDriverMutation, updateDriverMutation } = useDriversMutations();

  const onSubmit = (submitValues: FormValues) => {
    if (!driver) {
      createDriverMutation.mutate({
        firstName: submitValues.firstName,
        lastName: submitValues.lastName,
        pesel: submitValues.idNumber as number,
      }, {
        onSuccess: () => {
          toast.success('Driver has been added');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while adding driver');
        },
      });
    } else {
      updateDriverMutation.mutate({
        id: driver._id,
        payload: {
          firstName: submitValues.firstName,
          lastName: submitValues.lastName,
          pesel: submitValues.idNumber as number,
        },
      }, {
        onSuccess: () => {
          toast.success('Driver has been updated');
          handleClose();
        },
        onError: () => {
          toast.error('Something went wrong while updating driver');
        },
      });
    }
  };

  return (
    <Modal
      title={driver ? 'Edit driver' : 'Add driver'}
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
            name="firstName"
            label="First name"
            register={register}
            error={errors.firstName}
          />
          <FormInput
            name="lastName"
            label="Last name"
            register={register}
            error={errors.lastName}
          />
          <FormInput
            name="idNumber"
            label="Pesel"
            register={register}
            error={errors.idNumber}
          />
        </div>

      </form>
    </Modal>
  );
};
