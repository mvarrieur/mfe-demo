import React from "react";
import ReactDOM from "react-dom";
import Search from './Search';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Remote React App</h1>
    <Search />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
