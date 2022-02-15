import { useMutation, useQueryClient } from 'react-query';
import { ordersService } from './ordersService';

export const useOrdersMutations = () => {
  const queryClient = useQueryClient();

  const createOrderMutation = useMutation(ordersService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  const deleteOrderMutation = useMutation(ordersService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  const updateOrderMutation = useMutation(ordersService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  return { createOrderMutation, deleteOrderMutation, updateOrderMutation };
};
