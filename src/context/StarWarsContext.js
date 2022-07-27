import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarWarsContext = createContext();

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const getPlanets = async () => {
      const dataAPI = await fetchAPI();
      const newData = [...dataAPI];
      // Pesquisa em https://pt.stackoverflow.com/questions/55568/remover-uma-propriedade-de-um-objeto-contido-numa-array#:~:text=Voc%C3%AA%20pode%20usar%20o%20delete,objetos%20dentro%20da%20array%20bola%20.
      setData(newData.filter((planet) => delete planet.residents));
    };
    getPlanets();
  }, []);

  const changeFilterByName = (name) => {
    setFilterByName({ name });
  };
  console.log(filterByName);
  const context = {
    data,
    filterByName,
    changeFilterByName,
  };

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
