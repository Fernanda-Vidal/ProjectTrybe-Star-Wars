import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function ByPlanet() {
  const { data, filterByName } = useContext(StarWarsContext);

  const planetFiltered = () => data
    .filter((planet) => planet.name.includes(filterByName.name));

  return (
    <div>
      { planetFiltered()?.map((filtered, i) => (
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
    </div>
  );
}

export default ByPlanet;
