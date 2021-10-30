import { Router } from '@reach/router';
import { Login } from '@app/components/Login';
import { Register } from '@app/components/Register';
import { Layout } from '@app/components/Layout';
import { Main } from '@app/components/Main';

const App = () => (
  <Layout>
    <Router basepath="/app">
      <Register path="/register" />
      <Login path="/login" />
      <Main path="/" />
    </Router>
  </Layout>
);

export default App;
