import React from 'react';

function BookCard({ book, children })  {
  if(!book){
    return <div>Empty book!</div>;
  };

  const { Title, Price, Cover, Description, Subscribers } = book;

  return (
    <>
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title} />
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{Title}</div>
          <div>{Description}</div>
          <div>Подписчиков: {Subscribers}</div>
          { Subscribers > 5 &&
            <div style={styles.bestseller}>Bestseller!</div>
          }
          <div style={styles.price}>Цена: {Price}</div>
        </div>
      </div>
      { children }
    </>
  )
};

export default BookCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif',
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '.05rem'
  },
  bestseller: {
    color: 'red'
  }
};
