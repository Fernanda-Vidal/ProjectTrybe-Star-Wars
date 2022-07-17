import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function ByNumericFilters() {
  const { planetFilteredByNumericValue } = useContext(StarWarsContext);

  // const planetFilteredByNumericValue = () => {
  //   const filters = filterByNumericValue.map((filter) => Object.values(filter))
  //     .filter((_item, i) => i !== 0);
  //   // console.log(filters);
  //   let returnArray = '';
  //   filters.forEach((item) => {
  //     const [columm, comparison, value] = item;
  //     // data.filter((planet) => (
  //     // returnArray.push(Number(planet[columm]))
  //     if (comparison === 'maior que') {
  //       returnArray = data.filter((planet) => Number(planet[columm]) > Number(value));
  //       // return returnArray;
  //     } else if (comparison === 'menor que') {
  //       returnArray = data.filter((planet) => Number(planet[columm]) < Number(value));
  //       return returnArray;
  //     } else {
  //       returnArray = data.filter((planet) => Number(planet[columm]) === Number(value));
  //     }
  //     // console.log(returnArray);
  //   });
  //   return returnArray;
  // };

  // };

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      { planetFilteredByNumericValue()?.map((filtered, i) => (
        <tr key={ i + 1 }>
          <td>{filtered.name}</td>
          <td>{filtered.rotation_period}</td>
          <td>{filtered.orbital_period}</td>
          <td>{filtered.diameter}</td>
          <td>{filtered.climate}</td>
          <td>{filtered.gravity}</td>
          <td>{filtered.terrain}</td>
          <td>{filtered.surface_water}</td>
          <td>{filtered.population}</td>
          <td>{filtered.films}</td>
          <td>{filtered.created}</td>
          <td>{filtered.edited}</td>
          <td>{filtered.url}</td>
        </tr>
      ))}
    </table>
  );
}

export default ByNumericFilters;
