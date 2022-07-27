import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import Main from './page/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
