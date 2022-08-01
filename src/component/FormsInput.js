import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FormsInput() {
  const { filterByName,
    changeFilterByName,
    filterByNumericValues,
    changeFilterByNumericValues,
    removeFilter,
    removeAllNumericFilters,
    optionsColumn } = useContext(StarWarsContext);
  const [category, setCategory] = useState('population');
  const [operand, setOperand] = useState('maior que');
  const [number, setNumber] = useState(0);

  const generateSelect = (array) => array.map((option) => (
    <option
      data-testid="column-options"
      value={ option }
      key={ Math.random() }
    >
      { option }
    </option>
  ));

  const handleClick = (categoryFilter, operandFilter, numberFilter) => {
    changeFilterByNumericValues(categoryFilter, operandFilter, numberFilter);
    setCategory(optionsColumn[1]);
  };

  const handleClickRemove = (column) => {
    removeFilter(column);
  };

  return (
    <header>
      { filterByNumericValues
      && filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={ Math.random() }>
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            type="button"
            onClick={ () => handleClickRemove(column) }
          >
            X
          </button>
        </div>
      ))}
      <forms className="top-page">
        <h3>Star Wars Project - Trybe</h3>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName.name }
          onChange={ (ev) => changeFilterByName(ev.target.value) }
        />
      </forms>
      <form>
        <br />
        <label htmlFor="coluna">
          Coluna:
          <select
            data-testid="column-filter"
            value={ category }
            onChange={ (ev) => setCategory(ev.target.value) }
          >
            { generateSelect(optionsColumn)}

          </select>
        </label>
        { ' ' }
        <label htmlFor="operador">
          Operador:
          <select
            data-testid="comparison-filter"
            value={ operand }
            onChange={ (ev) => setOperand(ev.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        { ' ' }
        <input
          value={ number }
          type="number"
          data-testid="value-filter"
          onChange={ (ev) => setNumber(ev.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          disabled={ !(optionsColumn.length) }
          onClick={ () => handleClick(category, operand, number) }
        >
          FILTRAR
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => removeAllNumericFilters() }
        >
          REMOVER FILTROS
        </button>
      </form>
    </header>

  );
}

export default FormsInput;
