import { Router } from '@reach/router';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Layout } from './components/Layout';
import { Main } from './components/Main';

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
