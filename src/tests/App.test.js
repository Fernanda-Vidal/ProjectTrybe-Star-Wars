import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa todos os filtros da aplicação', () => {
  
  it('1 - Verifica renderização sem inserir nenhum filtro', async () => {
    render(<App />);
    const alderan = await screen.findByText(/alderaan/i);
    expect(alderan).toBeInTheDocument();
  });
  
  it('2 - Verifica renderização utilizando o filtro por nome', async () => {
    render(<App />);
    const inputName = screen.getByRole('textbox');
    expect(inputName).toBeInTheDocument();

    const dagobah = await screen.findByText(/dagobah/i);    
    userEvent.type('h')
    expect(dagobah).toBeInTheDocument();
  });

  it('3 - Verifica se é possível escrever no campo inputName', async () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'aa');
  })

  it('4 - Verifica renderização utilizando o filtro numérico e botões "filtrar" e "X"', async () => {
    render(<App />);
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
    
    const alderan = await screen.findByText(/alderaan/i);
    expect(alderan).toBeInTheDocument();
  });
  
  it('5 - Verifica botão "remover filtros" ', () => {
    render(<App />);
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

  it('6 - Verifica operador de comparação', async () => {
    render(<App />);
    const operand = screen.getByTestId('comparison-filter')
    expect(operand).toBeInTheDocument();
    expect(operand).toHaveLength(3)

    const columnFilter = screen.getByTestId('column-filter')
    expect(columnFilter).toBeInTheDocument();
    expect(columnFilter).toHaveLength(5)
  });

  it('7 - Verifica ordenação ascendente', async () => {
    render(<App />);
    const selectColumn = screen.getByTestId('column-sort')
    const radioAsc = screen.getByTestId('column-sort-input-asc')
    const buttonOrder = screen.getByTestId('column-sort-button')

    expect(selectColumn).toBeInTheDocument();
    userEvent.click(radioAsc);
    userEvent.click(buttonOrder);

    const yavin = await screen.findByText(/yavin/i);
    expect(yavin).toBeInTheDocument();
  });

  it('8 - Verifica ordenação descendente', async () => {
    render(<App />);
    const radioDesc = screen.getByTestId('column-sort-input-desc')
    const buttonOrder = screen.getByTestId('column-sort-button')

    userEvent.click(radioDesc);
    userEvent.click(buttonOrder);

    const coruscant = await screen.findByText(/coruscant/i);
    expect(coruscant).toBeInTheDocument();
  });

  it('Verifica funcionamento dos select', async () => {
    render(<App />);
    
    const columnFilter = screen.getByTestId('column-filter');
    const operand = screen.getByTestId('comparison-filter')
    
    fireEvent.change(columnFilter, {target: {value: 'rotation_period'}});
    fireEvent.change(operand, {target: {value: 'menor que'}});

    const inputNumber = screen.getByRole('spinbutton');
    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.type('18');
    userEvent.click(buttonFilter);

    const bespin = await screen.findByText(/bespin/i);
    expect(bespin).toBeInTheDocument()
  })
})
