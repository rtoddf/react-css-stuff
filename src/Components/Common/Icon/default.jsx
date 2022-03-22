import React from 'react';
import './default.scss';

function Icon({ iconClass, animation }) {
    return (
        <i className={`${iconClass} ${animation}`}></i>
    )
  }
  
  export default Icon;