import React from 'react';

export default ({errors})=>{
  if (errors){
    return (
      <ul className="errors">
        {errors.map(error=>(
          <li className="alert alert-danger">{error}</li>
        ))}
      </ul>
    );
  }
  return null;
};
