import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Modal } from '@app/components/ui/Modal';
import { FormInput } from '@app/components/ui/FormInput';

interface Props {
  handleClose: ()=>void;
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

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  idNumber: null,
};

export const ManageDriverModal = ({ handleClose }:Props) => {
  const {
    register, handleSubmit, formState: {
      errors, isValid, isSubmitted,
    },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });
  console.log(errors, isValid);

  const onSubmit = (submitValues: FormValues) => {
    console.log(submitValues);
  };

  return (
    <Modal
      title="Add driver"
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
