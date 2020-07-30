import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

import './index.css';

import authors from './authors.json';

import books from './books.json';

ReactDOM.render(
  <App books={books} authors={authors} />,
  document.getElementById('root')
);
