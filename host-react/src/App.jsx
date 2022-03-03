import React, { useState } from "react";
import ReactDOM from "react-dom";
import Search from 'remote_react/Search';

import "./index.scss";

const App = () => {
  const [pokemon, setPokemon] = useState({});

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1>Host React App</h1>
      <Search onSuccess={(data) => setPokemon(data)} />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
