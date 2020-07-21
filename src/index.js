import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
const product = {
  'Title': 'NotebookPro',
  'Cover': 'http://yandex.ru',
  'Price': '1000',
  'Description': 'It better notebook!',
  'Discount': true
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
