import { Card, Row, Col } from "antd";
import TripleDotsIcon from '../assets/icon/triple-dots.png';
import ListItem from "./list-item";

const List = (props) => {
	return (
		<Card>
			<Row className="list-header">
				<Col span={18}>
					<label className="list-title">{props.data.title}</label>
				</Col>
				<Col span={6}>
					<img src={TripleDotsIcon} alt="Triple dots" width="5" className="card-triple-dots" />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					{props.data.data.map((item, index) => (
						<ListItem
							key={index}
							no={index}
							img={item.img}
							productLabel={item.productLabel}
							price={item.price}
							soldTotal={item.soldTotal}
						/>
					))}
				</Col>
			</Row>
		</Card>
	)
}

export default List;