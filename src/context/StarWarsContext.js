import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarWarsContext = createContext();

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({});

  useEffect(() => {
    const getPlanets = async () => {
      const dataAPI = await fetchAPI();
      setData(dataAPI);
    };
    getPlanets();
  }, []);

  const addFilterName = (newPlanet) => {
    setFilterByName({ name: newPlanet });
  };

  const context = { data, filterByName, addFilterName };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: propTypes.node.isRequired,
};

export { StarWarsContext, ProviderStarWars as Provider };
