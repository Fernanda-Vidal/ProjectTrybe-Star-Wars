import React, { createContext, useEffect, useState } from 'react';
import propTypes, { number } from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarWarsContext = createContext();

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({});
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [arrayColumm, setArrayColumm] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  useEffect(() => {
    const getPlanets = async () => {
      const dataAPI = await fetchAPI();
      const newData = [...dataAPI];
      // Pesquisa em https://pt.stackoverflow.com/questions/55568/remover-uma-propriedade-de-um-objeto-contido-numa-array#:~:text=Voc%C3%AA%20pode%20usar%20o%20delete,objetos%20dentro%20da%20array%20bola%20.
      setData(newData.filter((planet) => delete planet.residents));
    };
    getPlanets();
  }, []);

  const addFilterName = (newPlanet) => {
    setFilterByName({ name: newPlanet });
  };

  const addColumm = (columm) => {
    setArrayColumm(columm);
  };

  const removeColumm = (columm) => {
    setArrayColumm(arrayColumm.filter((item) => item !== columm));
  };

  const changeFilter = (columm, comparison, value) => {
    // console.log(filterByNumericValue);
    setFilterByNumericValue(filterByNumericValue.concat({
      columm,
      comparison,
      value,
    }));
    removeColumm(columm);
    // }
  };

  const removeFilter = (filter) => {
    setFilterByNumericValue(filterByNumericValue
      .filter((item) => item.columm !== filter));
    console.log(filterByNumericValue);
  };

  const addIsFiltered = () => (setIsFiltered(true));
  const notIsFiltered = () => (setIsFiltered(false));
  // filterByNumericValue.length >= 1 ? setIsFiltered(true) : setIsFiltered(false));

  const planetFilteredByNumericValue = () => {
    const filters = filterByNumericValue.map((filter) => Object.values(filter));
    let returnArray = [];
    filters.forEach((item) => {
      const [columm, comparison, value] = item;
      if (comparison === 'maior que') {
        returnArray = data.filter((planet) => (
          !(Number.isNaN(value)) && Number(planet[columm]) > Number(value)));
        // console.log(returnArray);
      } else if (comparison === 'menor que') {
        returnArray = data.filter((planet) => (
          !(Number.isNaN(value)) && Number(planet[columm]) < Number(value)));
        return returnArray;
      } else {
        returnArray = data.filter((planet) => Number(planet[columm]) === Number(value));
      }
    });
    return returnArray;
  };

  const context = {
    data,
    filterByName,
    addFilterName,
    filterByNumericValue,
    changeFilter,
    removeFilter,
    addIsFiltered,
    notIsFiltered,
    isFiltered,
    arrayColumm,
    addColumm,
    planetFilteredByNumericValue,
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
