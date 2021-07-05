import { Row, Col, Card } from "antd";
import ArrowBottomIcon from '../assets/icon/arrow-bottom.png';
import TripleDotsIcon from '../assets/icon/triple-dots.png';
import SalesTurnoverIcon from '../assets/icon/sales-turnover.svg';

const Profit = () => {
	return (
		<Card className="card-profit">
			<Row>
				<Col span={18}>
					<p className="profit-label-1">Sales Turnover</p>
				</Col>
				<Col span={6}>
					<img src={TripleDotsIcon} alt="Triple dots" width="5" className="card-triple-dots" />
				</Col>
			</Row>
			<Row>
				<Col span={18}>
					<p className="profit-label-2">Rp. 3,600,000</p>
					<p className="profit-label-3">
						<span><img src={ArrowBottomIcon} alt="Arrow bottom" width="7.5" /></span>
						<span className="profit-label-red"> 13.8% </span>
						last period in produts sold
					</p>
				</Col>
				<Col span={6}>
					<img src={SalesTurnoverIcon} alt="Sales turnover" width="49" />
				</Col>
			</Row>
		</Card>
	)
}

export default Profit;