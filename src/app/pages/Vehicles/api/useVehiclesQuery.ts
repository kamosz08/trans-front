import { useQuery } from 'react-query';
import { vehiclesService } from './vehiclesService';

export const useVehiclesQuery = () => {
  const vehiclesQuery = useQuery(['vehicles'], vehiclesService.getAll);

  return { vehiclesQuery };
};
