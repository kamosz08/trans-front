import {
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import {
  AiOutlineLogout,
} from 'react-icons/ai';
import { useNavigate } from '@reach/router';
import { useDarkMode } from '@app/hooks/useDarkMode';
import { useSelectedRoute } from '@app/hooks/useSelectedRoute';
import { useAuth } from '@app/contexts/AuthContext';

const TITLES = {
  orders: 'Zlecenia',
  vehicles: 'Pojazdy',
  drivers: 'Kierowcy',
};

export const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <button
      onClick={handleMode}
      type="button"
      className="outline-none"
    >
      {darkTheme ? (
        <FaSun
          size="24"
          className="top-navigation-icon"
        />
      ) : (
        <FaMoon
          size="24"
          className="top-navigation-icon"
        />
      )}
    </button>
  );
};

const UserCircle = () => (
  <FaUserCircle
    size="24"
    className="top-navigation-icon"
  />
);

const LogoutIcon = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleClick = () => {
    logout().then(() => { navigate('/app/login'); });
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="outline-none"
    >
      <AiOutlineLogout
        size="24"
        className="top-navigation-icon"
      />
    </button>
  );
};

const Title = () => {
  const selectedRoute = useSelectedRoute();
  const title = TITLES[selectedRoute] || 'Trans';

  return (<h5 className="title-text">{title}</h5>);
};

export const TopNavigation = () => (
  <div className="top-navigation">
    <Title />
    <ThemeIcon />
    <UserCircle />
    <LogoutIcon />
  </div>
);
