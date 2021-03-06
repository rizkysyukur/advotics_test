
import { useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import DashboardIcon from '../assets/icon/dashboard.svg';
import MenuIcon from '../assets/icon/menu.png';
import { Layout } from 'antd';

const Sidebar = () => {
	const { Sider } = Layout;
	const [collapsed, setCollapsed] = useState(true);

	return (
		<>
			<Sider trigger={null} collapsible collapsed={collapsed} className="sider hiddenMobile">
				<div onClick={() => setCollapsed(!collapsed)} className="sider-menu" style={{ cursor: 'pointer' }}>
					{collapsed && <img src={MenuIcon} className="sider-img-toggle" alt="Menu Icon" />}
					{!collapsed && <LeftOutlined />}
				</div>
				<div className="sider-menu" style={{ background: '#D2D2D2' }}>
					<img src={DashboardIcon} className="sider-img-menu" alt="Dashboard Icon" />
					{!collapsed && <span className="sider-img-menu-label">Dashboard</span>}
				</div>
			</Sider>
		</>
	)
}

export default Sidebar;