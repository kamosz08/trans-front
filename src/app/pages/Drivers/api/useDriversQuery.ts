import { useQuery } from 'react-query';
import { driversService } from './driversService';

export const useDriversQuery = () => {
  const driversQuery = useQuery(['drivers'], driversService.getAll);

  return { driversQuery };
};
