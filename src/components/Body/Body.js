import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Products</h3>
        <div className="body_wrapper">
          <div className="upper_body">
            <div className="left_upper">
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ghp-030318-promo-tvs_DER-66358.jpg"
                className="landingImages"
              />
            </div>
            <div className="right_upper">
              <img
                src="https://cdn.macrumors.com/article-new/2018/09/littleiphonexr.jpg?retina"
                className="landingImages2"
              />
            </div>
          </div>
          <div className="lower_body">
            <div className="left_lower">
              <img
                src="https://static.bhphoto.com/images/images500x500/1539632856000_1437068.jpg"
                className="landingImages3"
              />
            </div>
            <div className="right_lower">
              <img
                src="https://cdn.gamerant.com/wp-content/uploads/switch-xbox-one-ps4.jpg.optimal.jpg"
                className="landingImages4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
