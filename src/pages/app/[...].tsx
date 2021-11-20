import { Router } from '@reach/router';
import { Login } from '@app/pages/Login';
import { Register } from '@app/pages/Register';
import { Layout } from '@app/components/Layout';
import { Main } from '@app/pages/Main';
import { Orders } from '@app/pages/Orders';
import { Drivers } from '@app/pages/Drivers';
import { Vehicles } from '@app/pages/Vehicles';
import { PATHS } from '@app/consts';

const App = () => (
  <Layout>
    <Router basepath="/app">
      <Register path={PATHS.register} />
      <Login path={PATHS.login} />
      <Orders path={PATHS.orders} />
      <Drivers path={PATHS.drivers} />
      <Vehicles path={PATHS.vehicles} />
      <Main path="/" />
    </Router>
  </Layout>
);

export default App;
