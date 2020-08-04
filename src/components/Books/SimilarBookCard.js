import React from 'react';

function SimilarBookCard({ updateSimilarBooks, similarBook, authors, books }) {
  const { id, authorId, Cover, Title } = books.find(book => book.id === similarBook.id);
  const { Name } = authors.find(author => author.id === authorId);
  return(
    <div style={styles.similarBook}>
      <div>
        <img
          onClick={() => updateSimilarBooks({id: id, visible: false})}
          style={styles.cross}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Fxemoji_u274C.svg/768px-Fxemoji_u274C.svg.png'
        />
      </div>
      <div>
        <img style={styles.cover} src={Cover} />
      </div>
      <div>
        {Name}
      </div>
      <div>{Title}</div>
    </div>
  )
}

export default React.memo(SimilarBookCard);

const styles = {
  cover: {
    width: '150px',
    height: '250px'
  },
  cross: {
    position: 'relative',
    left: '70px',
    top: '20px',
    width: '20px'
  },
  similarBook: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    font: 'normal 10pt sans-serif',
  }
}
