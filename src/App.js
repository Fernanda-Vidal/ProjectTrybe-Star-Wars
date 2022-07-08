import React from 'react';
import './App.css';
import Page from './component/Page';
import { Provider } from './context/StarContext';

function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

export default App;
