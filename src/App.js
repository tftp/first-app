import React from 'react';

import BookCard from './BookCard';
import AuthorCard from './AuthorCard';

class App extends React.Component{
  render(){
    return (
      <div>
        <div>
          <AuthorCard author={this.props.author} />
        </div>
        <div>
          <BookCard book={this.props.book} />
        </div>
        <div>
          <button>Подписаться</button>
        </div>
      </div>
    );
  }
}

export default App;
