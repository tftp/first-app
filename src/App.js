import React from 'react';
import Hello from './Hello';

class App extends React.Component{
  render(){
    return (
      <div>
        <Hello name='Mama!'/>
        <Hello name='Natasha!'/>
      </div>
    );
  }
}

export default App;
