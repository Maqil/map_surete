import React from "react";
import ReactDOM from "react-dom";
import ReactLeaflet from "./react-leaflet";

import "./style.css";

class App extends React.Component {
  render() {
    return <ReactLeaflet path="react-leaflet" />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
