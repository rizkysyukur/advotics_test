import { Line } from '@ant-design/charts';
import { Card, Row, Col, Select } from "antd";
import TripleDotsIcon from '../assets/icon/triple-dots.png';

const Chart = () => {
	const { Option } = Select;

	const data = [
		{ day: 'Jan 12', value: 25 },
		{ day: 'Tue', value: 23 },
		{ day: 'Wed', value: 20 },
		{ day: 'Thu', value: 21 },
		{ day: 'Fri', value: 18 },
		{ day: 'Sat', value: 23 },
		{ day: 'Sun', value: 24 },
	];

	const config = {
		data,
		height: 400,
		xField: 'day',
		yField: 'value',
		point: {
			size: 5,
			shape: 'diamond',
		},
	};

	return (
		<Card>
			<Row className="chart-header">
				<Col xs={{span: 24}} sm={{span: 12}} style={{marginBottom: '15px'}}>
					<img src={TripleDotsIcon} alt="Triple dots" width="5" className="card-header-item-chart-mobile showedMobile" />
					<label className="list-title">AVERAGE PURCHASE VALUE</label>
				</Col>
				<Col xs={{span: 24}} sm={{span: 12}}>
					<img src={TripleDotsIcon} alt="Triple dots" width="5" className="card-header-item-chart hiddenMobile" />
					<Select
						value="X"
						className="card-header-item-chart full-width-mobile"
					>
						<Option value="X" selected>Last 6 months</Option>
					</Select>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Line {...config} />
				</Col>
			</Row>
		</Card>
	)
}

export default Chart;