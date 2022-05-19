import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";
import "./index.css";

export default function Navbar(props) {
  return (
    <Router>
      <nav className="navbar p-5 bg-info">
        <Link to="/">
          <h1>
            Shop 2
            <span>
              <FontAwesomeIcon icon={faRegistered} />
            </span>
            eact
          </h1>
        </Link>
        <Link to="/showCart">
          <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg" />
          <span> {props.totalValue} items</span>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={props.prods}
              onIncrement={props.handleIncrement}
              onDecrement={props.handleDecrement}
            />
          }
        />
      </Routes>
    </Router>
  );
}