import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import ByPlanet from './ByPlanet';
import Forms from './Forms';

function Table() {
  const { data, filterByName } = useContext(StarWarsContext);

  return (
    <div>
      <header>
        <h1>PROJETO STAR WARS - TRYBE</h1>
        <Forms />
      </header>
      { filterByName.name && <ByPlanet /> }
      { !filterByName.name
      && (
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
          { data?.map((planetItem, i) => (
            <tr key={ i + 1 }>
              <td>{planetItem.name}</td>
              <td>{planetItem.rotation_period}</td>
              <td>{planetItem.orbital_period}</td>
              <td>{planetItem.diameter}</td>
              <td>{planetItem.climate}</td>
              <td>{planetItem.gravity}</td>
              <td>{planetItem.terrain}</td>
              <td>{planetItem.surface_water}</td>
              <td>{planetItem.population}</td>
              <td>{planetItem.films}</td>
              <td>{planetItem.created}</td>
              <td>{planetItem.edited}</td>
              <td>{planetItem.url}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default Table;