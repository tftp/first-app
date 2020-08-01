import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from '../components/Books/BookCard';

test('render book in a card', () => {
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

  const { getByText } = render(<BookCard book={book} />);
  expect(getByText('На пороге тьмы')).toBeInTheDocument();
  expect(getByText('Цена: 100')).toBeInTheDocument();
});

test('render an empty book in a card', () => {
  const { getByText } = render(<BookCard />);
  expect(getByText('Empty book!')).toBeInTheDocument();
});
