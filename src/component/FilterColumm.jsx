import React from 'react';

function FilterColumm() {
  return (
    <form>
      <label htmlFor="options">
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
    </form>
  );
}
export default FilterColumm;
