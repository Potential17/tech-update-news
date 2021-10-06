import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchNews from '../services/news'

function Provider({ children }) {
  const [news, setNews] = useState([]);

  const setFetchNews = async (country) => {
    setNews([]);
    setNews(await fetchNews(country));
  }
  
  useEffect(() => {
    setFetchNews('us');
  }, [])

  const context = {
    news,
    setFetchNews,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default Provider;
