import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../App';

const author = {
  'Name': 'Андрей Круз',
  'Email': 'andrey@kruz.lib',
  'Avatar': 'https://litres.ru/static/authors/100/00/06/56/00065628_100.jpg',
  'Info': 'российский писатель, работавший в жанре фантастики'
};
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


const render = () => ReactDOMServer.renderToString(<App book={book} author={author} />);

export default render;
