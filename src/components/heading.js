import AdvoticsLogoImg from '../assets/img/advotics-logo.png';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import LogoutIcon from '../assets/icon/logout.png';
import { MenuOutlined } from '@ant-design/icons';

const Heading = (props) => {
	return (
		<nav className="navbar">
			<div className="hiddenMobile">
				<img src={AdvoticsLogoImg} alt="Advotics Logo" width="150" className="navbar-logo" />
				<p className="navbar-second-logo">powered by <span><img src={AdvoticsLogoImg} alt="Advotics Logo" width="60" /></span></p>
				<img src={LogoutIcon} alt="Advotics Logo" width="20" className="navbar-logout" />
				<Avatar icon={<UserOutlined />} className="navbar-avatar" />
				<div className="navbar-text">
					<p className="header-usernane-label">Username</p>
					<p className="header-companyname-label">Company Name</p>
				</div>
			</div>
			<button className="showedMobile navbar-burger-menu" onClick={() => props.setShowSidebarMobile(!props.showSidebarMobile)}><MenuOutlined /></button>
		</nav>
	)
}

export default Heading;