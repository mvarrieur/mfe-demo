import React, { useState } from 'react';

const pokeApiBase = 'https://pokeapi.co/api/v2/pokemon/';

const Search = ({ onSuccess }) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${pokeApiBase}${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch(e => {
        setError('Pokemon not found');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-pink-100 via-pink-300 to-pink-500 bg-gradient-to-br p-8">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">Search</h1>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for a pokemon"
          className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded'
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300">Search!</button>
      </form>
    </div>
  );
}

export default Search;
