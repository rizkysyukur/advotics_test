import { Row, Col } from "antd";
import Product1Img from '../assets/img/product1.png';

const ListItem = (props) => {
	return (
		<>
			{props.no === 0 &&
				<div className="list-item-top">
					<Row>
						<Col span={10}>
							<img src={props.img} alt="Product 1" width="80" />
						</Col>
						<Col span={14}>
							<Row>
								<Col className="list-item-label-product-top">
									<label>{props.productLabel}</label>
								</Col>
							</Row>
							<Row>
								<Col span={12} className="list-item-label-product-info-top">
									<label>{props.price}</label>
								</Col>
								<Col span={12} className="list-item-label-product-info-top">
									<label>{props.soldTotal}</label>
								</Col>
							</Row>
							<Row>
								<Col>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			}

			{props.no !== 0 &&
				<div className="list-item">
					<Row>
						<Col span={8}>
							<img src={props.img} alt="Product 1" width="60" />
						</Col>
						<Col span={16}>
							<Row>
								<Col className="list-item-label-product">
									<label>{props.productLabel}</label>
								</Col>
							</Row>
							<Row>
								<Col span={12} className="list-item-label-product-info">
									<label>{props.price}</label>
								</Col>
								<Col span={12} className="list-item-label-product-info">
									<label>{props.soldTotal}</label>
								</Col>
							</Row>
							<Row>
								<Col>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			}
		</>
	)
}

export default ListItem;