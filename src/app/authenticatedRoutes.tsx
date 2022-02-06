import { RouteComponentProps, Router } from '@reach/router';
import { Layout } from '@app/components/Layout';
import { Main } from '@app/pages/Main';
import { Orders } from '@app/pages/Orders';
import { Drivers } from '@app/pages/Drivers/Drivers';
import { Vehicles } from '@app/pages/Vehicles';
import { PATHS } from '@app/consts';

interface Props extends RouteComponentProps {}

const AuthenticatedRoutes:React.FC<Props> = () => (
  <Layout>
    <Router>
      <Orders path={PATHS.orders} />
      <Drivers path={PATHS.drivers} />
      <Vehicles path={PATHS.vehicles} />
      <Main path="/" />
    </Router>
  </Layout>
);

export default AuthenticatedRoutes;
