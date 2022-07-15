import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterName() {
  const {
    filterByName,
    addFilterName,
  } = useContext(StarWarsContext);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (ev) => addFilterName(ev.target.value) }
      />
    </form>
  );
}

export default FilterName;
