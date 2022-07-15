import React from 'react';
import './App.css';
import Page from './page/Page';
import { Provider } from './context/StarWarsContext';

function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

export default App;
