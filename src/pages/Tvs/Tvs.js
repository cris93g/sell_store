import React, { Component } from "react";
import { connect } from "react-redux";
import { getTv } from "../../redux/ducks/itemReducer";
import Cards from "../../components/Cards/Cards";

class Tvs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTv();
  }
  render() {
    const { items } = this.props.itemReducer;
    console.log(items);
    itemsDisplay = items.map(item => {
      return <Cards />;
    });
    return <div>{itemsDisplay}</div>;
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getTv }
)(Tvs);
