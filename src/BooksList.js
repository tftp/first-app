import React from 'react';

import BookCard from './BookCard';
import AuthorsList from './AuthorsList';
import SubscribeModal from './SubscribeModal'

class BooksList extends React.Component{
  render(){
    const { authors, books } = this.props;
    return (
      <>
        {books.map(book => (
          <div key={book.id}>
            <AuthorsList authors={authors} />
            <BookCard book={book}>
              <div>
                <button>Подписаться</button>
                <SubscribeModal />
              </div>
            </BookCard>
          </div>
          ))
        }
      </>
    );

  }
}

export default BooksList;
