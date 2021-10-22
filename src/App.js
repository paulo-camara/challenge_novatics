
import './main.scss';
import { Layout } from './components/shared/Layout/Layout';
import { WithRouter } from './components/Router';

function App(props) {
  return (
    <Layout>
      <WithRouter />
    </Layout>
  )
};

export default App;