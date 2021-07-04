import { Row, Col, Card } from "antd";

const Dashboard = () => {
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
					<div className="bar">
						<label className="bar-title">MARKET INSIGHTS</label>
					</div>
				</Col>
			</Row>
			<Row className="row">
				<Col span={4}>
					<Card>Disini diisi harga dan keranjang</Card>
				</Col>
			</Row>
			<Row className="row" gutter={16}>
				<Col span={12} className="gutter-row">
					<Card>
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						Disini diisi dengan chart <br />
						</Card>
				</Col>
				<Col span={6} className="gutter-row">
					<Card>
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						Disini diisi best selling <br />
						</Card>
				</Col>
				<Col span={6} className="gutter-row">
					<Card>
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						Disini diisi top competitor <br />
						</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard;