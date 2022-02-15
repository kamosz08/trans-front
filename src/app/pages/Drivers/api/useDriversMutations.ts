import { useMutation, useQueryClient } from 'react-query';
import { driversService } from './driversService';

export const useDriversMutations = () => {
  const queryClient = useQueryClient();

  const createDriverMutation = useMutation(driversService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const deleteDriverMutation = useMutation(driversService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const updateDriverMutation = useMutation(driversService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  return { createDriverMutation, deleteDriverMutation, updateDriverMutation };
};
