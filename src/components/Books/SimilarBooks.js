import React from 'react';

import SimilarBookCard from './SimilarBookCard';

class SimilarBooks extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      similarBooks: []
    };

    this.updateSimilarBooks = this.updateSimilarBooks.bind(this);
  }

  updateSimilarBooks(similarBook){
    this.setState({
      similarBooks: similarBook
    });
    console.log(this.state);
    console.log(similarBook);
  }

  handleHidden(event){
    const target = event.target;
    if(target.className === 'similar-book'){
      console.log(target.id)
      this.updateSimilarBooks([{id: target.id, visible: false}])
    }
  }

  render(){
    const { similarBooks } = this.props;
    this.state.similarBooks.length ||  this.updateSimilarBooks(similarBooks);


    return(
      <div style={styles.similarBooks} onClick={this.handleHidden}>
        {this.state.similarBooks.filter(book => book.visible).map(book =>
          <div key={book.id} id={`similar-book-${book.id}`}>
            <SimilarBookCard similarBook={book} {...this.props} updateSimilarBooks={this.updateSimilarBooks} />
          </div>
        )}
      </div>
    )
  }
}

export default SimilarBooks;

const styles = {
  similarBooks: {
    display: 'flex',
  },
  similarBook: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    font: 'normal 10pt sans-serif',
  }

}
