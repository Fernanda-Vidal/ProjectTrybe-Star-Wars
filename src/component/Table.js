import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const {
    data, filterByName, filterByNumericValues, order } = useContext(StarWarsContext);

  const addFilter = (list) => {
    let newList = [...list];
    newList = newList.filter((planet) => planet.name.includes(filterByName.name));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      const number = parseInt(value, 10);
      newList = newList.filter((planet) => {
        const planetColumn = parseInt(planet[column], 10);
        if (comparison === 'maior que') {
          return planetColumn > number;
        }
        if (comparison === 'menor que') {
          return planetColumn < number;
        }
        return planetColumn === number;
      });
    });
    return newList;
  };

  //  Pesquisa realizada: https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
  const ordenerList = (a, b) => {
    const filtro = order.column;
    const number = -1;
    if (order.sort === 'ASC') {
      if (parseInt(a[filtro], 10) < parseInt(b[filtro], 10)) { return number; }
      if (parseInt(a[filtro], 10) > parseInt(b[filtro], 10)) { return 1; }
      return 0;
    }
    if (order.sort === 'DESC') {
      if (parseInt(a[filtro], 10) > parseInt(b[filtro], 10)) { return number; }
      if (parseInt(a[filtro], 10) < parseInt(b[filtro], 10)) { return 1; }
      return 0;
    }
    if (a.name < b.name) { return number; }
    if (a.name > b.name) { return 1; }
    return 0;
  };

  return (
    <main>
      <table>
        <thead>
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
        </thead>
        { addFilter(data).sort(ordenerList)
          .map((planet, i) => (
            <tr key={ i + 1 }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>
                { planet.rotation_period }
              </td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </table>
    </main>
  );
}

export default Table;
