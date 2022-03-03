import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Search from 'remote_react/Search';
import Show from 'remote_svelte/Show';

import "./index.scss";

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const divRef = useRef(null);
  const [showComponent, setShowComponent] = useState({ $set: () => {}});

  useEffect(() => {
    const comp = new Show({ target: divRef.current, props: { pokemon } });
    setShowComponent(comp);
  }, []);

  useEffect(() => {
    showComponent && showComponent.$set({ pokemon });
  }, [pokemon]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Host React App</h1>

      <div className="flex">
        <div className="pr-2">
          <Search onSuccess={(data) => {setPokemon(data)}} />
        </div>
        <div className="flex-grow pl-2">
          <div ref={divRef} />
        </div>
      </div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
