import { BsListCheck, BsPeopleFill } from 'react-icons/bs';
import { MdDriveEta } from 'react-icons/md';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { useSelectedRoute } from '@app/hooks/useSelectedRoute';
import { PATHS } from '@app/consts';
import logo from '../../images/logo_no_text.png';

export const Sidebar: React.FC = () => {
  const selectedRoute = useSelectedRoute();

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg text-blue-100 w-64 space-y-2 py-7
  absolute inset-y-0 left-0 transform -translate-x-full
  md:relative md:translate-x-0 transition duration-200 ease-in-out"
    >
      <img
        className="px-16 mb-8"
        src={logo}
        alt="logo"
      />
      <Link
        to={`/app${PATHS.orders}`}
        className={clsx('w-full px-3 py-2 flex items-center text-gray-700 dark:text-gray-400 mx-0', selectedRoute === 'orders' && 'border-solid border-l-4 border-blue-500 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 font-bold')}
      >
        <div className="mr-3"><BsListCheck size="24" /></div>
        <span>
          Orders
        </span>
      </Link>
      <Link
        to={`/app${PATHS.drivers}`}
        className={clsx('w-full px-3 py-2 flex items-center text-gray-700 dark:text-gray-400 mx-0', selectedRoute === 'drivers' && 'border-solid border-l-4 border-blue-500 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 font-bold')}
      >
        <div className="mr-3"><BsPeopleFill size="24" /></div>
        <span>
          Drivers
        </span>
      </Link>
      <Link
        to={`/app${PATHS.vehicles}`}
        className={clsx('w-full px-3 py-2 flex items-center text-gray-700 dark:text-gray-400 mx-0', selectedRoute === 'vehicles' && 'border-solid border-l-4 border-blue-500 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 font-bold')}
      >
        <div className="mr-3"><MdDriveEta size="24" /></div>
        <span>
          Vehicles
        </span>
      </Link>
    </div>
  );
};
