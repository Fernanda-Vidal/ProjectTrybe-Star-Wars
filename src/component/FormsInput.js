import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FormsInput() {
  const { filterByName,
    changeFilterByName,
    changeFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [operand, setOperand] = useState('maior que');
  const [number, setNumber] = useState(0);
  const optionsColumn = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const generateSelect = (array) => array.map((option) => (
    <option value={ option } key={ Math.random() }>{ option }</option>
  ));

  return (
    <form>
      <div className="top-page">
        <h3>Star Wars Project - Trybe</h3>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName.name }
          onChange={ (ev) => changeFilterByName(ev.target.value) }
        />
      </div>
      <br />
      <label htmlFor="coluna">
        Coluna:
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ (ev) => setColumn(ev.target.value) }
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
      {/* { console.log(number) } */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => changeFilterByNumericValues(column, operand, number) }
      >
        FILTRAR
      </button>
    </form>
  );
}

export default FormsInput;
