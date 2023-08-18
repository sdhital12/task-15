// ChildComponent2.js
import React from 'react';

const ChildComponent2 = (props) => {
  return (
    <div className='child1'>
      <h2>Child Component 2</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default ChildComponent2;