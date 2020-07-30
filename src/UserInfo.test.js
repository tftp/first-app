import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthContext from './AuthContext';

import UserInfo from './UserInfo';

test('render User Info', () => {
  const users = [
    {
      'email': 'user@mail.com',
      'firstName': 'UserFirstName',
      'lastName': 'UserLastName',
      'avatarUrl': 'https://litres.ru/static/authors/100/00/06/56/00065628_100.jpg'
    }
  ]

  const { getByText } = render(
    <AuthContext.Provider value={users}>
      <UserInfo />
    </AuthContext.Provider>,
  );
  expect(getByText('user@mail.com')).toBeInTheDocument();
});

test('render an empty user info', () => {
  const users = [
    {
      'email': '',
      'firstName': 'UserFirstName',
      'lastName': 'UserLastName',
      'avatarUrl': 'https://litres.ru/static/authors/100/00/06/56/00065628_100.jpg'
    }
  ]

  const { getByText } = render(
    <AuthContext.Provider value={users}>
      <UserInfo />
    </AuthContext.Provider>,
  );
  expect(getByText('Wellcom, Guest!')).toBeInTheDocument();
});
