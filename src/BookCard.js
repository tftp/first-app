import React from 'react';

class BookCard extends React.Component {
  render(){
    if(!this.props.book){
      return <div>Empty book!</div>;
    };

    const {
      book: { Title, Price, Cover, Description }
    } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title} />
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{Title}</div>
          <div>{Description}</div>
          <div style={styles.price}>Цена: {Price}</div>
        </div>
      </div>
    )
  };
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
  }
};
