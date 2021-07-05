import './assets/styles.css';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard';
import { Layout } from 'antd';
import Heading from './components/heading';
import Sidebar from './components/sidebar';
import { BestSellingProvider } from './contexts/best-selling-context';
import { TopCompetitorProvider } from './contexts/top-competitor-context';
import SidebarMobile from './components/sidebar-mobile';
import { useState } from 'react';

function App() {
  const { Content } = Layout;
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  
  return (
    <Layout>
      <Heading
        showSidebarMobile={showSidebarMobile}
        setShowSidebarMobile={(e) => setShowSidebarMobile(e)}
      />
      <SidebarMobile 
        visible={showSidebarMobile}
        setVisible={(e) => setShowSidebarMobile(e)} />
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
