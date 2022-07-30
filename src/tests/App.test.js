import React from 'react';
import { getAllByRole, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa todos os filtros da aplicação', () => {

  beforeEach(() => {
    render(<App />);
  })
  
  it('1 - Verifica renderização sem inserir nenhum filtro', async () => {
    const alderan = await screen.findByText(/alderaan/i);
    expect(alderan).toBeInTheDocument();
  });
  
  it('2 - Verifica renderização utilizando o filtro por nome', async () => {
    const inputName = screen.getByRole('textbox');
    expect(inputName).toBeInTheDocument();

    const dagobah = await screen.findByText(/dagobah/i);    
    userEvent.type('h')
    expect(dagobah).toBeInTheDocument();
  });

  it('3 - Verifica renderização utilizando o filtro numérico e botões "filtrar" e "X"', async () => {
    const inputNumber = screen.getByRole('spinbutton');
    expect(inputNumber).toBeInTheDocument();

    const buttonFilter = screen.getByTestId('button-filter')
    const coruscant = await screen.findByText(/coruscant/i);
    userEvent.type('2000000000');
    userEvent.click(buttonFilter);
    expect(coruscant).toBeInTheDocument();

    const filtro = screen.getByTestId('filter');
    const buttonX = screen.getByRole('button', { name: /x/i });
    expect(filtro).toBeInTheDocument();
    expect(buttonX).toBeInTheDocument();
    userEvent.click(buttonX);
    expect(filtro).not.toBeInTheDocument();
  });
  
  it('4 - Verifica botão "remover filtros" ', () => {
    const inputNumber = screen.getByRole('spinbutton');
    const buttonFilter = screen.getByTestId('button-filter')
    
    userEvent.type('6000000')
    userEvent.click(buttonFilter);
    const filtro = screen.getByTestId('filter');
    expect(filtro).toBeInTheDocument();
    
    const buttonRemove = screen.getByTestId('button-remove-filters');

    userEvent.click(buttonRemove);
    expect(filtro).not.toBeInTheDocument();
  });

  it('5 - Verifica operador de comparação', async () => {
    const operand = screen.getByTestId('comparison-filter')
    expect(operand).toBeInTheDocument();

  });

  it('6 - Verifica ordenação ascendente', async () => {
    const radioAsc = screen.getByTestId('column-sort-input-desc')
    const buttonOrder = screen.getByTestId('column-sort-button')

    userEvent.click(radioAsc);
    userEvent.click(buttonOrder);

    const yavin = await screen.findByText(/yavin/i);
    expect(yavin).toBeInTheDocument();
  });

  it('7 - Verifica ordenação descendente', async () => {
    const radioDesc = screen.getByTestId('column-sort-input-desc')
    const buttonOrder = screen.getByTestId('column-sort-button')

    userEvent.click(radioDesc);
    userEvent.click(buttonOrder);

    const coruscant = await screen.findByText(/coruscant/i);
    expect(coruscant).toBeInTheDocument();
  });

})
