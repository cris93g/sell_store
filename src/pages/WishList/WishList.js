import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/userReducer";
class WishList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		console.log(this.props.userReducer);
		return (
			<div>
				{this.props.userReducer.user.name ? (
					<div>
						<p>{`hi there ${this.props.userReducer.user.name}`}</p>
					</div>
				) : (
					"please Log In"
				)}
			</div>
		);
	}
}
const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ getUser }
)(WishList);
