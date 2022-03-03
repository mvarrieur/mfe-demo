import React, { useState } from "react";
import ReactDOM from "react-dom";
import Search from 'remote_react/Search';

import "./index.scss";

const App = () => {
  const [pokemon, setPokemon] = useState({});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Host React App</h1>

      <div className="flex">
        <div className="pr-2">
          <Search onSuccess={(data) => setPokemon(data)} />
        </div>
        <div className="flex-grow pl-2">
          Content
        </div>
      </div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
