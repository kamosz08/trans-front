import { Redirect, Router } from '@reach/router';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Login } from '@app/pages/Login';
import { PATHS } from '@app/consts';
import { Register } from '@app/pages/Register';
import { AuthProvider, useAuth } from '@app/contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const AuthenticatedRoutes = React.lazy(() => import('@app/authenticatedRoutes'));

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const App = () => {
  if (typeof window === 'undefined') return null;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          theme="dark"
        />
        <Routes />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
