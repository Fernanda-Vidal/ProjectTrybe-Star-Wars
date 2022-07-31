import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarWarsContext = createContext();

const INITIAL_STATE = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({});

  const [optionsColumn, setOptionsColumn] = useState(INITIAL_STATE);
  const [optionsOrder] = useState(INITIAL_STATE);

  useEffect(() => {
    const getPlanets = async () => {
      const dataAPI = await fetchAPI();
      const newData = [...dataAPI];

      // Pesquisa em https://pt.stackoverflow.com/questions/55568/remover-uma-propriedade-de-um-objeto-contido-numa-array#:~:text=Voc%C3%AA%20pode%20usar%20o%20delete,objetos%20dentro%20da%20array%20bola%20.
      // newData = newData.filter((item) => delete item.residents);
      // setData(newData.filter((planet) => delete planet.residents));
      setData(newData);
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

  const changeFilterByNumericValues = (column, comparison, value) => {
    setFilterByNumericValues([...filterByNumericValues, {
      column, comparison, value }]);

    changeOptionsColumn(column, 'remove');
  };

  const removeFilter = (filtro) => {
    setFilterByNumericValues(filterByNumericValues
      .filter(({ column }) => column !== filtro));
    changeOptionsColumn(filtro, 'add');
  };

  const removeAllNumericFilters = () => {
    setFilterByNumericValues([]);
    setOptionsColumn(INITIAL_STATE);
  };

  const changeOrder = (column, sort) => {
    setOrder({ column, sort });
  };

  const context = {
    data,
    filterByName,
    changeFilterByName,
    filterByNumericValues,
    changeFilterByNumericValues,
    removeFilter,
    removeAllNumericFilters,
    optionsColumn,
    changeOptionsColumn,
    order,
    optionsOrder,
    changeOrder,
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
