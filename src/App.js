import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./productdata";
import "./App.css";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
  }

  handleIncrement = (addValue) => {
    if (addValue.value < 10) {
      const updatedValue = addValue.value++;
      this.setState({ updatedValue });
    }
  };

  handleDecrement = (subValue) => {
    if (subValue.value > 0) {
      const updatedValue = subValue.value--;
      this.setState({ updatedValue });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalValue={this.state.products
            .map((prod) => prod.value)
            .reduce((acc, curr, index) => acc + curr, 0)}
          prods={this.state.products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
