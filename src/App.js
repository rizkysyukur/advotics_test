import './assets/styles.css';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard';
import { Layout } from 'antd';
import Heading from './components/heading';
import Sidebar from './components/sidebar';

function App() {
  const { Content } = Layout;

  return (
    <Layout style={{ height: '100vh' }}>
      <Heading />
      <Layout>
        <Sidebar />
        <Content>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;
