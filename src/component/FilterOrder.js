import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterOrder() {
  const { optionsOrder, changeOrder } = useContext(StarWarsContext);
  const [columnOrder, setColumnOrder] = useState('population');
  const [radioOrder, setRadioOrder] = useState('ascendente');
  const generateSelect = (array) => array.map((option) => (
    <option value={ option } key={ Math.random() }>{ option }</option>
  ));

  const handleOnRadioChange = ({ target: { value } }) => {
    setRadioOrder(value);
  };

  const handleClickOrder = () => {
    changeOrder(columnOrder, radioOrder);
  };

  return (
    <form>
      <label htmlFor="Order">
        Ordenar
        <select
          data-testid="column-sort"
          value={ columnOrder }
          onChange={ (ev) => setColumnOrder(ev.target.value) }
        >
          { generateSelect(optionsOrder) }
        </select>
      </label>
      <label htmlFor="ascendente">
        Ascendente
        <input
          type="radio"
          id="ascendente"
          name="order"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (ev) => handleOnRadioChange(ev) }
        />
      </label>
      <label htmlFor="descendente">
        Descendente
        <input
          type="radio"
          id="descendente"
          name="order"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ (ev) => handleOnRadioChange(ev) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClickOrder }
      >
        ORDENAR
      </button>
    </form>
  );
}

export default FilterOrder;
