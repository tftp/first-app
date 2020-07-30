import React from 'react';

import UserInfo from './UserInfo';

class Header extends React.Component{
  render(){
    return(
      <>
      <header style={styles.header}>
        <div>
          THIS IS HEADER
        </div>
        <div style={styles.userinfo}>
          <UserInfo />
        </div>
      </header>
      </>
    )
  }
}

export default Header;

const styles = {
  header:{
    textAlign: "center",
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  userinfo:{
    font: 'normal 10pt sans-serif',
    position: 'absolute',
    right: '15px',
  }
}
