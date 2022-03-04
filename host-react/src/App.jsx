import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Search from "remote_react/Search";
import Show from "remote_svelte/Show";
import Favorites from "remote_svelte/Favorites";

import "./index.scss";

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [favorites, setFavorites] = useState({});
  const showDivRef = useRef(null);
  const favoritesSvelteDivRef = useRef(null);
  const [showComponent, setShowComponent] = useState({ $set: () => {} });
  const [favoritesComponent, setFavoritesComponent] = useState({
    $set: () => {},
  });

  const toggleFavorite = (pokemon) => {
    const { id } = pokemon;
    const newFavorites = { ...favorites };
    if (id in favorites) {
      delete newFavorites[id];
    } else {
      newFavorites[id] = pokemon;
    }

    setFavorites(newFavorites);
  };

  useEffect(() => {
    const showComponent = new Show({
      target: showDivRef.current,
      props: { handleFavoriteClick: toggleFavorite },
    });
    setShowComponent(showComponent);

    const favoritesComponent = new Favorites({
      target: favoritesSvelteDivRef.current,
    });
    setFavoritesComponent(favoritesComponent);
  }, []);

  useEffect(() => {
    showComponent &&
      showComponent.$set({
        pokemon,
        favorited: pokemon.id in favorites,
        handleFavoriteClick: toggleFavorite,
      });
    favoritesComponent && favoritesComponent.$set({ favorites });
  }, [pokemon, favorites]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Host React App</h1>

      <div className="flex">
        <div className="pr-2">
          <Search
            onSuccess={(data) => {
              setPokemon(data);
            }}
          />
        </div>
        <div className="flex-grow pl-2" ref={showDivRef}></div>
        {favorites && <div className="pl-2" ref={favoritesSvelteDivRef}></div>}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
