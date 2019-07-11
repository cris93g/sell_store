import React, { Component } from "react";
import { connect } from "react-redux";
import { getTv } from "../../redux/ducks/itemReducer";

class Tvs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTv();
  }
  render() {
    console.log(this.props.itemReducer);
    return <div>tvs</div>;
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getTv }
)(Tvs);
