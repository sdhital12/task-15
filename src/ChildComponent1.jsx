// ChildComponent1.js
import React from 'react';

const ChildComponent1 = (props) => {
  return (
    <div className='child1'>
      <h2>Child Component 1</h2>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default ChildComponent1;