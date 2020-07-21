import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';

const product = {
  'Title': 'NotebookPro',
  'Cover': 'https://v2.parceljs.org/assets/parcel.png',
  'Price': '1000',
  'Description': 'It better notebook!',
  'Discount': true
};


const render = () => ReactDOMServer.renderToString(<App product={product} />);

export default render;
