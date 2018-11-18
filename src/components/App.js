import React, { Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Menu from "./Menu.js";
// import Footer from "./Footer.js";
import Home from "./Home.js";

export default function App() {
  return (
    <HashRouter>
      <Fragment>
        <Menu />
        <Route exact path="/" component={Home} />
        {/* <Footer /> */}
      </Fragment>
    </HashRouter>
  );
}
