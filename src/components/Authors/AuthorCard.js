import React from 'react';

function AuthorCard({ author }) {
  if(!author){
    return <div>Empty author!</div>
  };

  const { Name, Avatar } = author;
  return (
    <div style={styles.container}>
      <div style={styles.imageBox}>
        <img style={styles.image} src={Avatar} alt={Name} />
      </div>
      <div style={styles.cardBody}>
        <div>{Name}</div>
      </div>
    </div>
  )
};

export default AuthorCard;

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
  }
};
