import { AxiosResponse } from 'axios';
import { axiosInstance } from '@app/api/api';
import { Driver } from '@app/pages/Drivers/api/driversService';
import { Vehicle } from '@app/pages/Vehicles/api/vehiclesService';

interface CreateOrderPayload {
  name: string;
  price: number;
  driverId: string;
  vehicleId: string;
}
export interface Order {
  _id: string;
  name: string;
  price: number;
  driver: Driver;
  vehicle: Vehicle;
}

type UpdateOrderPayload = Partial<CreateOrderPayload>;

const getOrders = async (): Promise<AxiosResponse<Order[]>> => {
  const data = await axiosInstance.get('/orders');

  return data;
};

const postOrder = async (payload: CreateOrderPayload) => {
  const data = await axiosInstance.post('/orders', payload);

  return data;
};

const patchOrder = async ({ id, payload }:{id: string; payload: UpdateOrderPayload}) => {
  const data = await axiosInstance.patch(`/orders/${id}`, payload);

  return data;
};

const deleteOrder = async (id: string) => {
  const data = await axiosInstance.delete(`/orders/${id}`);

  return data;
};

export const ordersService = {
  getAll: getOrders,
  create: postOrder,
  update: patchOrder,
  delete: deleteOrder,
};
