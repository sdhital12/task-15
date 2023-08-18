import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
// ParentComponent.js
import React from 'react';

const ParentComponent = () => {
  const name = 'Hari';
  const age = 45;

  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <ChildComponent1 name={name} />
      <ChildComponent2 age={age} />
    </div>
  );
};

export default ParentComponent;
