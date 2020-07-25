import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from './AuthorCard';

test('render author in a card', () => {
  const author = {
    'Name': 'Андрей Круз',
    'Email': 'andrey@kruz.lib',
    'Avatar': 'https://litres.ru/static/authors/100/00/06/56/00065628_100.jpg',
    'Info': 'российский писатель, работавший в жанре фантастики'
  };

  const { getByText } = render(<AuthorCard author={author} />);
  expect(getByText('Андрей Круз')).toBeInTheDocument();
});

test('render an empty author in a card', () => {
  const { getByText } = render(<AuthorCard />);
  expect(getByText('Empty author!')).toBeInTheDocument();
});
