import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../redux/ducks/itemReducer";
import styled from "styled-components";
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    console.log(this.props.itemReducer.cart);

    return (
      <div>
        {this.props.itemReducer.cart.length > 0
          ? this.props.itemReducer.cart.map(item => {
              console.log(item);
              return (
                <div className="card_page">
                  <Wrapper>
                    <Card>
                      <img src={item.picture} className="card_pic" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>

                      <br />
                    </Card>
                  </Wrapper>
                </div>
              );
            })
          : "No Items in cart add some"}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getCart }
)(Cart);

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
