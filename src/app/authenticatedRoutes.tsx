import { RouteComponentProps, Router } from '@reach/router';
import { Layout } from '@app/components/Layout';
import { Orders } from '@app/pages/Orders/Orders';
import { Drivers } from '@app/pages/Drivers/Drivers';
import { Vehicles } from '@app/pages/Vehicles/Vehicles';
import { PATHS } from '@app/consts';

interface Props extends RouteComponentProps {}

const AuthenticatedRoutes:React.FC<Props> = () => (
  <Layout>
    <Router>
      <Orders path={PATHS.orders} />
      <Drivers path={PATHS.drivers} />
      <Vehicles path={PATHS.vehicles} />
    </Router>
  </Layout>
);

export default AuthenticatedRoutes;
