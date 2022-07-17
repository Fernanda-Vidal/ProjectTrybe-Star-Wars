import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Filter() {
  const {
    filterByNumericValue,
    notIsFiltered,
    removeFilter,
    addColumm,
    arrayColumm } = useContext(StarWarsContext);

  const handleClickRemove = (filter) => {
    removeFilter(filter);
    console.log(filterByNumericValue);
    addColumm(arrayColumm.concat(filter));

  };
  return (
    <div>
      { filterByNumericValue?.map(({ columm, comparison, value }, index) => (
          <div key={ index + 1 }>
            <span data-testid="filter">
              { ` ${columm} ${comparison} ${value} ` }
            </span>
            <button type="button" onClick={ () => handleClickRemove(columm) }>X</button>
          </div>
        )) }
    </div>
  );
}

export default Filter;
