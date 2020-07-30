import React from 'react';

import AuthContext from './AuthContext';

class UserInfo extends React.Component{
  render(){
    return(
      <AuthContext.Consumer>
      {users => (
        users[0].email ? `${users[0].email}` : 'Wellcom, Guest!'
      )}
      </AuthContext.Consumer>
    )
  }
}

export default UserInfo;