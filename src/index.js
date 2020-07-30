import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

import AuthContext from './AuthContext';

import './index.css';

import authors from './authors.json';
import books from './books.json';
import users from './users.json';

ReactDOM.render(
  <AuthContext.Provider value={users}>
    <App books={books} authors={authors} />
  </AuthContext.Provider>,
  document.getElementById('root')
);
