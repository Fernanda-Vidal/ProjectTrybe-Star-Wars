import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FormsFilters() {
  const {
    changeFilter,
    addIsFiltered,
    isFiltered,
    arrayColumm,
    colummFilter,
    setColummFilter,
    // planetFilteredByNumericValue,
  } = useContext(StarWarsContext);

  // const [colummFilter, setColummFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const handleClickFilter = (type) => {
    if (colummFilter && comparisonFilter) {
      changeFilter(colummFilter, comparisonFilter, valueFilter, type);
      addIsFiltered();
      console.log('arrayColumm[0]', arrayColumm[0]);
      console.log('arrayColumm[1]', arrayColumm[1]);
      setColummFilter(arrayColumm[1]);
    }
  };

  const generateOptions = (array) => (
    array.map((option, index) => (
      <option key={ index + 1 } value={ option }>{ option }</option>
    ))
  );

  return (
    <form>
      <label htmlFor="column-filter">
        Coluna
        <select
          data-testid="column-filter"
          value={ colummFilter }
          onChange={ (ev) => setColummFilter(ev.target.value) }
        >
          { generateOptions(arrayColumm) }
        </select>
        { console.log(colummFilter)}
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ (ev) => setComparisonFilter(ev.target.value) }
        >
          { generateOptions(['maior que', 'menor que', 'igual a'])}
        </select>
        {/* { console.log(comparisonFilter)} */}
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          value={ valueFilter }
          onChange={ (ev) => setValueFilter(ev.target.value) }
        />
        {/* { console.log(valueFilter)} */}
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClickFilter('remove') }
      >
        FILTRAR
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
      >
        REMOVER TODOS OS FILTROS
      </button>
      {/* { console.log(filterByNumericValue)} */}
      { console.log(isFiltered)}
    </form>
  );
}
export default FormsFilters;
