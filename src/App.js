import './assets/styles.css';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard';
import { Layout } from 'antd';
import Heading from './components/heading';
import Sidebar from './components/sidebar';
import { BestSellingProvider } from './contexts/best-selling-context';
import { TopCompetitorProvider } from './contexts/top-competitor-context';

function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <Heading />
      <Layout>
        <Sidebar />
        <Content>
          <BestSellingProvider>
            <TopCompetitorProvider>
              <Dashboard />
            </TopCompetitorProvider>
          </BestSellingProvider>´
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;
