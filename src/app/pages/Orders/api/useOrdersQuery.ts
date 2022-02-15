import { useQuery } from 'react-query';
import { ordersService } from './ordersService';

export const useOrdersQuery = () => {
  const ordersQuery = useQuery(['orders'], ordersService.getAll);

  return { ordersQuery };
};
