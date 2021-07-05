import { Row, Col } from "antd";
import Profit from "../components/profit";
import Chart from "../components/chart";
import List from "../components/list";
import { useContext } from "react";
import { BestSellingContext } from "../contexts/best-selling-context";
import { TopCompetitorContext } from "../contexts/top-competitor-context";
import HeadingBar from "../components/heading-bar";

const Dashboard = () => {
	const [bestSelling,] = useContext(BestSellingContext);
	const [topCompetitor,] = useContext(TopCompetitorContext);

	return (
		<div className="content">
			<Row className='row'>
				<Col span={12}><h1 className="header-title">Dashboard</h1></Col>
				<Col span={12}>
					<div className="bar">
						<label className="bar-title">Input Calender</label>
					</div>
				</Col>
			</Row>
			<Row className="row">
				<Col span={24}>
					<HeadingBar />
				</Col>
			</Row>
			<Row className="row">
				<Col xxl={{ span: 5 }} xl={{ span: 7 }} lg={{ span: 8 }} md={{ span: 11 }} sm={{ span: 15 }} xs={{ span: 24 }}>
					<Profit />
				</Col>
			</Row>
			<Row className="row" gutter={16}>
				<Col className="col gutter-row" span={24} xl={{ span: 12 }} sm={{ span: 24 }}>
					<Chart />
				</Col>
				<Col className="col gutter-row" span={24} xl={{ span: 6 }} sm={{ span: 12 }}>
					<List data={bestSelling} />
				</Col>
				<Col className="col gutter-row" span={24} xl={{ span: 6 }} sm={{ span: 12 }}>
					<List data={topCompetitor} />
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard;