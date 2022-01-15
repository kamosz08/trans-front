import { Redirect, Router } from '@reach/router';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Login } from '@app/pages/Login';
import { PATHS } from '@app/consts';
import { Register } from '@app/pages/Register';
import { AuthProvider, useAuth } from '@app/contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const AuthenticatedRoutes = React.lazy(() => import('@app/authenticatedRoutes'));

const Routes = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Router basepath="/app">
        {isAuthenticated && <AuthenticatedRoutes path="/*" />}
        <Register path={PATHS.register} />
        <Login path={PATHS.login} />
        <Redirect
          from="*"
          to={`/app${PATHS.login}`}
          noThrow
        />
      </Router>
    </Suspense>
  );
};

const App = () => (
  <AuthProvider>
    <ToastContainer
      position="top-center"
      theme="dark"
    />
    <Routes />
  </AuthProvider>
);

export default App;
