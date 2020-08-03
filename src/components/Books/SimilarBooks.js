import React from 'react';

import SimilarBookCard from './SimilarBookCard';

class SimilarBooks extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      similarBooks: this.props.similarBooks
    };
    this.countSimilarBooks = this.countSimilarBooks.bind(this);
    this.updateSimilarBooks = this.updateSimilarBooks.bind(this);
  }

  countSimilarBooks(){
    const lengthVisibleState = this.state.similarBooks.filter(similar => similar.visible).length;
    if (lengthVisibleState < 3){
      const similar = this.state.similarBooks.find(similar => !similar.visible)
      this.updateSimilarBooks({id: similar.id, visible: true})
    }
  }

  updateSimilarBooks(similarBook){
     this.setState((state) => ({
     similarBooks: state.similarBooks.filter(similar => similar.id != similarBook.id)
   }));

     this.setState((state) => ({
     similarBooks: [...state.similarBooks, similarBook]
   }),
   () => {this.countSimilarBooks()}
  );
 }

  render(){
    const { similarBooks } = this.props;

    return(
      <div style={styles.similarBooks}>
        {this.state.similarBooks.filter(book => book.visible).map(book =>
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
