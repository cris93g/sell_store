import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/userReducer";
import { Button } from "reactstrap";
import Auth from "../../components/Auth/Auth";
import "./WishList.css";
class WishList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props.userReducer);
    const { REACT_APP_LOGIN, REACT_APP_LOGOUT } = process.env;
    return (
      <div>
        {this.props.userReducer.user.name ? (
          <div>
            <p>{`hi there ${this.props.userReducer.user.name}`}</p>
            <img
              src={this.props.userReducer.user.pic}
              className="profpic"
              alt="profile pic"
            />
            <a href={REACT_APP_LOGOUT}>
              <Button>Logout</Button>
            </a>
          </div>
        ) : (
          <div>
            <p>PLS log in to view your wishlist</p>
            <a href={REACT_APP_LOGIN}>
              <Button>Login</Button>
            </a>
          </div>
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
