import { Drawer, Menu } from "antd";
import { LogoutOutlined, BarChartOutlined } from "@ant-design/icons";

const SidebarMobile = (props) => {
	return (
		<Drawer
			title="USERNAME"
			placement="right"
			closable={false}
			onClose={() => props.setVisible(false)}
			visible={props.visible}
		>
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="light"
				inlineCollapsed={false}
			>
				<Menu.Item key="1" icon={<BarChartOutlined />}>
					Dasboard
				</Menu.Item>
				<Menu.Item key="2" icon={<LogoutOutlined />}>
					Logout
				</Menu.Item>
			</Menu>
		</Drawer>
	)
}

export default SidebarMobile;