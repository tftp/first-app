import React from 'react';

import BookCard from './BookCard';
import AuthorsList from '../Authors/AuthorsList';
import SubscribeModal from './SubscribeModal'
import SimilarBooks from './SimilarBooks';
import withLoader from '../HOC/withLoader';
import withBooks from '../HOC/withBooks';

class BooksList extends React.Component {
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
                <hr />
              </div>
            </BookCard>
          </div>
          ))
        }
        Похожие книги:
        <SimilarBooks {...this.props} />
      </>
    );
  }
}

export default withBooks(withLoader(BooksList));
