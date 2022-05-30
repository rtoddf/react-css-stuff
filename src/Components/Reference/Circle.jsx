import React from 'react';
import './default.scss';

function Circle({ classNames }) {
    return (
        <div className={`circle ${classNames}`}></div>
    )
  }
  
  export default Circle;