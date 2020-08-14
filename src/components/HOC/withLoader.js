import React from 'react';

const withLoader = EnchancedComponent => props => (
  props.isLoading
    ? <div> Loading... </div>
    : <EnchancedComponent {...props} />
);

export default withLoader;
