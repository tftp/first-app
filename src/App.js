import React from 'react';

import ProductCard from './ProductCard';

class App extends React.Component{
  render(){
    return (
      <div>
        <ProductCard product={this.props.product} />
      </div>
    );
  }
}

export default App;
