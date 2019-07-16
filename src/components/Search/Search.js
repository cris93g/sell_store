import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import routes from "../../routes";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      words: ""
    };
    this.search = this.search.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/products`).then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  search(namekey, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id == namekey) {
        console.log("YES");
        console.log(array[i].name);
        // <Link to={`/item/${array[i].id}`} />;
      } else {
        console.log("try again");
      }
    }
  }
  onChangeHandler(e) {
    this.setState({ words: e.target.value });
  }
  onSubmit() {
    this.search(this.state.words, this.state.products);
  }
  render() {
    console.log(this.state.words);
    const { products } = this.state;
    console.log(products);
    return (
      <div>
        <input onChange={e => this.onChangeHandler(e)} />
        <button onClick={this.onSubmit} />
      </div>
    );
  }
}

export default Search;
