import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fetchAPI from '../helpers/fetchApi';

const StarContext = createContext();

function ProviderStar({ children }) {
  const [dataState, setData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await fetchAPI();
      setData(data);
    };
    apiCall();
  }, []);

  const context = { dataState };

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

ProviderStar.propTypes = {
  children: propTypes.node.isRequired,
};

export { StarContext, ProviderStar as Provider };
