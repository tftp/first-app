import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

const product = {
  'Title': 'NotebookPro',
  'Cover': 'https://v2.parceljs.org/assets/parcel.png',
  'Price': '1000',
  'Description': 'It better notebook!',
  'Discount': true
};

ReactDOM.render(
  <App product={product} />,
  document.getElementById('root')
);
