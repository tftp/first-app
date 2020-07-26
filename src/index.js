import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

import './index.css';

import authors from './authors.json';

const book = {
  'Title': 'На пороге тьмы',
  'Description': 'Любая дорога начинается с одного, первого шага. Даже дорога в другую реальность. Иногда этот шаг можно сделать случайно. Всего лишь один шаг, и ты оказываешься на пороге Тьмы, в странном, потерявшемся среди слоев времени мире, среди таких же потерявшихся людей.',
  'Page': '403',
  'Language': 'Русский',
  'Progress': '0',
  'Cover': 'https://data.fantlab.ru/images/editions/plus/big/45025_3?r=1492539658',
  'MinPrice': '50',
  'Price': '100',
  'Amount collected': '0',
  'Expected amount': '1000'
};

ReactDOM.render(
  <App book={book} authors={authors} />,
  document.getElementById('root')
);
