import React, { Component } from "react";
import { connect } from "react-redux";
import { getTv, addToCart } from "../../redux/ducks/itemReducer";
import Cards from "../../components/Cards/Cards";
import "./Tvs.css";
import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class Tvs extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getTv();
		// this.props.addToCart();
	}
	render() {
		return (
			<div>
				{this.props.itemReducer.items.length > 0
					? this.props.itemReducer.items.map(item => {
							console.log(item);
							return (
								<div className="card_page">
									<Wrapper>
										<Card>
											<img src={item.picture} className="card_pic" />
											<p>{item.name}</p>
											<p>{item.price}</p>
											<Button color="danger" onClick={() => addToCart(item)}>
												Buy!
											</Button>
											<Link to={`/item/${item.id}`}>
												{" "}
												<Button color="danger">check item</Button>
											</Link>
											<br />
										</Card>
									</Wrapper>
								</div>
							);
					  })
					: "...loading"}
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getTv, addToCart }
)(Tvs);

const Wrapper = styled.section`
	width: 100%;
	margin: auto;
	margin: auto;
	display: flex;
	/* height: 60%; */
	/* align-items: center; */
`;
const Card = styled.div`
	width: 70%;
	margin: auto;
	/* display: flex; */
	/* border: 1px solid black; */
	margin-bottom: 5px;
`;
