import React from 'react';

import AuthContext from './AuthContext';

function UserInfo(){
  return(
    <AuthContext.Consumer>
    {users => (
      users[0].email ? `${users[0].email}` : 'Wellcom, Guest!'
    )}
    </AuthContext.Consumer>
  )
}

export default UserInfo;
