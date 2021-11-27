import { Router } from '@reach/router';
import React, { Suspense } from 'react';
import { Login } from '@app/pages/Login';
import { PATHS } from '@app/consts';
import { Register } from '@app/pages/Register';

const AuthenticatedRoutes = React.lazy(() => import('@app/authenticatedRoutes'));

const App = () => {
  const isAuthenticated = true;
  return (
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Router basepath="/app">
        <Register path={PATHS.register} />
        <Login path={PATHS.login} />
        {isAuthenticated && <AuthenticatedRoutes path="/*" />}
      </Router>
    </Suspense>
  );
};

export default App;
