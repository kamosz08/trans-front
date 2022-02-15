import { useMutation, useQueryClient } from 'react-query';
import { vehiclesService } from './vehiclesService';

export const useVehiclesMutations = () => {
  const queryClient = useQueryClient();

  const createVehicleMutation = useMutation(vehiclesService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles']);
    },
  });

  const deleteVehicleMutation = useMutation(vehiclesService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles']);
    },
  });

  const updateVehicleMutation = useMutation(vehiclesService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles']);
    },
  });

  return { createVehicleMutation, deleteVehicleMutation, updateVehicleMutation };
};
