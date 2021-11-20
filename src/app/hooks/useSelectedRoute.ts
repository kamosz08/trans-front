import { useLocation } from '@reach/router';
import { PATHS } from '@app/consts';

export const useSelectedRoute = () => {
  const { pathname } = useLocation();

  let selectedRoute = 'unknown';
  Object.keys(PATHS).forEach((key) => {
    if (PATHS[key] === pathname.replace('/app', '')) {
      selectedRoute = key;
    }
  });

  return selectedRoute as keyof typeof PATHS | 'unknown';
};
