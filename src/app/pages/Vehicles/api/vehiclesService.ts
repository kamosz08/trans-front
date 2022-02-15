import { AxiosResponse } from 'axios';
import { axiosInstance } from '@app/api/api';

interface CreateVehiclePayload {
  registration: string;
  class: string;
}
export interface Vehicle {
  _id: string;
  class: string;
  registration: string;
}

type UpdateVehiclePayload = Partial<CreateVehiclePayload>;

const getVehicles = async (): Promise<AxiosResponse<Vehicle[]>> => {
  const data = await axiosInstance.get('/vehicles');

  return data;
};

const postVehicle = async (payload: CreateVehiclePayload) => {
  const data = await axiosInstance.post('/vehicles', payload);

  return data;
};

const patchVehicle = async ({ id, payload }:{id: string; payload: UpdateVehiclePayload}) => {
  const data = await axiosInstance.patch(`/vehicles/${id}`, payload);

  return data;
};

const deleteVehicle = async (id: string) => {
  const data = await axiosInstance.delete(`/vehicles/${id}`);

  return data;
};

export const vehiclesService = {
  getAll: getVehicles,
  create: postVehicle,
  update: patchVehicle,
  delete: deleteVehicle,
};
