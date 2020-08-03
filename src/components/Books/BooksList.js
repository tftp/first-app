import React from 'react';

import BookCard from './BookCard';
import AuthorsList from '../Authors/AuthorsList';
import SubscribeModal from './SubscribeModal'

function BooksList({ authors, books }) {
  return (
    // Если я уберу фрагмент, выдает ошибку [parcel]: @parcel/transformer-babel: Unexpected token, expected "," (11:12)
    <>
      {books.map(book => (
        <div key={book.id}>
          <AuthorsList authors={authors} />
          <BookCard book={book}>
            <div>
              <button>Подписаться</button>
              <SubscribeModal />
              <hr />
            </div>
          </BookCard>
        </div>
        ))
      }
    </>
  );
}

export default BooksList;
