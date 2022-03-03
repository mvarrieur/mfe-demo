import React, { useState } from 'react';

const pokeApiBase = 'https://pokeapi.co/api/v2/pokemon/';

const Search = ({ onSuccess }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${pokeApiBase}${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        onSuccess(data);
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for a pokemon"
          className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded'
        />
        <button type="submit" className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300">Search!</button>
      </form>
    </div>
  );
}

export default Search;
