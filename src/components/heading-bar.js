import { Row, Col } from "antd";
import HelpIcon from '../assets/icon/help.png';
import { UpOutlined } from "@ant-design/icons";

const HeadingBar = () => {
	return (
		<div className="bar">
			<Row>
				<Col span={12}>
					<label className="bar-title">MARKET INSIGHTS</label>
				</Col>
				<Col span={12}>
					<div className="bar-help">
						<img src={HelpIcon} alt="Help" width="20" />
						<a href="#" className="bar-text-link">Click Here for Help</a>
						<UpOutlined style={{ color: '#FFFFFF', fontWeight: 'bold' }} />
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default HeadingBar;