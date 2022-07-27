import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import FormsInput from './FormsInput';

function Table() {
  const { data, filterByName } = useContext(StarWarsContext);

  const addFilter = (list) => {
    let newList = [...list];
    newList = newList.filter((item) => item.name.includes(filterByName.name));
    return newList;
  };

  return (
    <main>
      <FormsInput />
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
        { addFilter(data)
          .map((planet, i) => (
            <tr key={ i + 1 }>
              <td>{ planet.name }</td>
              <td>
                { planet.rotation_period }
              </td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.diameter }</td>
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
