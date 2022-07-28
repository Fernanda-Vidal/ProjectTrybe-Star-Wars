import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarWarsContext = createContext();

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [optionsColumn, setOptionsColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    const getPlanets = async () => {
      const dataAPI = await fetchAPI();
      let newData = [...dataAPI];

      // Pesquisa em https://pt.stackoverflow.com/questions/55568/remover-uma-propriedade-de-um-objeto-contido-numa-array#:~:text=Voc%C3%AA%20pode%20usar%20o%20delete,objetos%20dentro%20da%20array%20bola%20.
      newData = newData.filter((item) => delete item.residents);
      // console.log(dataAPI);
      setData(newData.filter((planet) => delete planet.residents));
    };
    getPlanets();
  }, []);

  const changeFilterByName = (name) => {
    setFilterByName({ name });
  };

  const changeOptionsColumn = (column, arg) => {
    if (arg === 'remove') {
      setOptionsColumn(optionsColumn.filter((option) => option !== column));
    } else {
      setOptionsColumn([...optionsColumn, column]);
    }
  };

  const changeFilterByNumericValues = (column, comparison, value, type) => {
    setFilterByNumericValues([...filterByNumericValues, {
      column, comparison, value }]);

    changeOptionsColumn(column, type);
  };
  // console.log(filterByNumericValues);

  const removeFilter = (filtro) => {
    setFilterByNumericValues(filterByNumericValues
      .filter(({ column }) => column !== filtro));
    changeOptionsColumn(filtro, 'add');
  };
  console.log('filterByNumericValues', filterByNumericValues);

  const context = {
    data,
    filterByName,
    changeFilterByName,
    filterByNumericValues,
    changeFilterByNumericValues,
    removeFilter,
    optionsColumn,
    changeOptionsColumn,
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
