import React from 'react';

import UserInfo from './UserInfo';

class Header extends React.Component{
  render(){
    return(
      <>
        <div style={styles.header}>
          THIS IS HEADER
        </div>
        <div style={styles.userinfo}>
          <UserInfo />
        </div>
      </>
    )
  }
}

export default Header;

const styles = {
  header:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  userinfo:{
    position: 'absolute',
    right: '15px',
  }
}
