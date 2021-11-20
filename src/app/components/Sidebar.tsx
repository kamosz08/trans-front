import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { Link } from 'gatsby';
import { useSelectedRoute } from '@app/hooks/useSelectedRoute';
import { PATHS } from '@app/consts';
import logo from '../../images/logo_no_text.png';

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export const Sidebar: React.FC = () => {
  const selectedRoute = useSelectedRoute();

  const selectedRouteClassnames = 'bg-blue-600 dark:bg-blue-600 text-white hover:text-white';

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg text-blue-100 w-64 space-y-2 py-7 px-2
  absolute inset-y-0 left-0 transform -translate-x-full
  md:relative md:translate-x-0 transition duration-200 ease-in-out"
    >
      <img
        className="px-12 mb-8"
        src={logo}
        alt="logo"
      />
      <Link
        to={`/app${PATHS.orders}`}
        className={`sidebar-item ${selectedRoute === 'orders' ? selectedRouteClassnames : ''}`}
      >
        <div className="mr-4"><FaFire size="14" /></div>
        <span>
          Zlecenia
        </span>
      </Link>
      <Link
        to={`/app${PATHS.drivers}`}
        className={`sidebar-item ${selectedRoute === 'drivers' ? selectedRouteClassnames : ''}`}
      >
        <div className="mr-4"><FaFire size="14" /></div>
        <span>
          Kierowcy
        </span>
      </Link>
      <Link
        to={`/app${PATHS.vehicles}`}
        className={`sidebar-item ${selectedRoute === 'vehicles' ? selectedRouteClassnames : ''}`}
      >
        <div className="mr-4"><FaFire size="14" /></div>
        <span>
          Pojazdy
        </span>
      </Link>
      {/* <SideBarIcon icon={<FaFire size="28" />} />
    <SideBarIcon icon={<BsPlus size="32" />} />
    <SideBarIcon icon={<BsFillLightningFill size="20" />} />
    <SideBarIcon icon={<FaPoo size="20" />} />
    <SideBarIcon icon={<BsGearFill size="22" />} /> */}
    </div>
  );
};
