import React from 'react';
import { useLocation } from 'react-router-dom';

const Form = () => {
  const location = useLocation();
  const { data } = location.state; // Accessing the data passed via location state
console.log(data)
  // Now you can use the data object in your component
  // For example:
  return (
    <div>
      <h1>Form Component</h1>
      {/* Render your form using the data */}
      <p>Data received: {JSON.stringify(data)}</p>
    </div>
  );
};

export default Form;
