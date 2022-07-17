import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Filter() {
  const {
    filterByNumericValue,
    notIsFiltered,
    // isFiltered,
    removeFilter,
    changeArrayColumm,
    arrayColumm,
    setColummFilter,
    colummFilter,
  } = useContext(StarWarsContext);

  const handleClickRemove = (filter, type) => {
    removeFilter(filter);
    changeArrayColumm(filter, type);
    console.log(filterByNumericValue.length);
    console.log(arrayColumm);
    if (filterByNumericValue.length === 1) {
      notIsFiltered();
    }
    if (arrayColumm.length === 1) {
      setColummFilter(colummFilter[1]);
    }
  };
  return (
    <div>
      { filterByNumericValue && filterByNumericValue
        .map(({ columm, comparison, value = 0 }, index) => (
          <div key={ index + 1 }>
            <span data-testid="filter">
              { `${columm} ${comparison} ${value}` }
            </span>
            <button
              type="button"
              onClick={ () => handleClickRemove(columm, 'add') }
            >
              X
            </button>
          </div>
        )) }
    </div>
  );
}

export default Filter;
