import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

import AuthContext from './static/AuthContext';

import './index.css';

import authors from './data/authors.json';
import books from './data/books.json';
import users from './data/users.json';
import similarBooks from './data/similarBooks.json';

ReactDOM.render(
  <AuthContext.Provider value={users}>
    <App books={books} authors={authors} similarBooks={similarBooks}/>
  </AuthContext.Provider>,
  document.getElementById('root')
);
