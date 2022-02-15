import { AxiosResponse } from 'axios';
import { axiosInstance } from '@app/api/api';

interface CreateDriverPayload {
  firstName: string;
  lastName: string;
  pesel: number;
}
export interface Driver {
  _id: string;
  firstName: string;
  lastName: string;
  pesel: number;
}

type UpdateDriverPayload = Partial<CreateDriverPayload>;

const getDrivers = async (): Promise<AxiosResponse<Driver[]>> => {
  const data = await axiosInstance.get('/drivers');

  return data;
};

const postDriver = async (payload: CreateDriverPayload) => {
  const data = await axiosInstance.post('/drivers', payload);

  return data;
};

const patchDriver = async ({ id, payload }:{id: string; payload: UpdateDriverPayload}) => {
  const data = await axiosInstance.patch(`/drivers/${id}`, payload);

  return data;
};

const deleteDriver = async (id: string) => {
  const data = await axiosInstance.delete(`/drivers/${id}`);

  return data;
};

export const driversService = {
  getAll: getDrivers,
  create: postDriver,
  update: patchDriver,
  delete: deleteDriver,
};
