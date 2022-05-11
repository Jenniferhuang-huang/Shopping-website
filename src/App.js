import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          img: "/cologne.jpg",
          name: "Unisex Cologne",
          value: 0,
        },
        { id: 2, img: "/iwatch.jpg", name: "Apple iWatch", value: 0 },
        { id: 3, img: "/mug.jpg", name: "Unique Mug", value: 0 },
        { id: 4, img: "/wallet.jpg", name: "Mens Wallet", value: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Displayproduct products={this.state.products} />
      </div>
    );
  }
}

function Displayproduct(props) {
  return (
    <div>
      {props.products.map((product) => {
        return (
          <div key={product.id} className="border border-1 p-3">
            <h4 className="mx-5">{product.name}</h4>
            <img src={product.img} width="150"></img>
            <span className="mx-5 p-3 border border-3">{product.value}</span>
            quantity
          </div>
        );
      })}
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar p-5 bg-info">
      <h1>Shop to React</h1>
      <p>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="fas fa-lg"
        ></FontAwesomeIcon>
        items
      </p>
    </div>
  );
}

export default App;
