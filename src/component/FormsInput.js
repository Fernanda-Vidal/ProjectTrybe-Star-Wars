import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FormsInput() {
  const { filterByName, changeFilterByName } = useContext(StarWarsContext);
  return (
    <form>
      <h3>Projeto Star Wars - Trybe</h3>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (ev) => changeFilterByName(ev.target.value) }
      />
    </form>
  );
}

export default FormsInput;
