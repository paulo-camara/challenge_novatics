
import './main.scss';
import { Layout } from './components/shared/Layout/Layout';
import { WithRouter } from './components/Router';
import { AxiosInterceptors } from './components/contexts/AxiosInterceptor/AxiosInterceptor';

function App(props) {
  return (
    <AxiosInterceptors>
      <Layout>
        <WithRouter />
      </Layout>
    </AxiosInterceptors>
  )
};

export default App;