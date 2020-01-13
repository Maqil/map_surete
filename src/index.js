import React from "react";
import ReactDOM from "react-dom";
import ReactLeaflet from "./react-leaflet";

import { HashRouter, Route, Switch } from "react-router-dom";

import "./style.css";

// class App extends React.Component {
//   render() {
//     return <ReactLeaflet path="react-leaflet" />;
//   }
// }

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={ReactLeaflet} />
        </Switch>
      </HashRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
