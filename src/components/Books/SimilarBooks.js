import React from 'react';

import SimilarBookCard from './SimilarBookCard';

class SimilarBooks extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      similarBooks: this.props.similarBooks
    };
    this.updateSimilarBooks = this.updateSimilarBooks.bind(this);
  }

  updateSimilarBooks(similarBook){
     this.setState((state) => ({
     similarBooks: state.similarBooks.filter(similar => similar.id != similarBook.id)
   }));

     this.setState((state) => ({
     similarBooks: [...state.similarBooks, similarBook]
    })
   );
 }

  render(){
    const { similarBooks } = this.props;

    return(
      <div style={styles.similarBooks}>
        {this.state.similarBooks.slice(0,3).map(book =>
          <div key={book.id} >
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
}
