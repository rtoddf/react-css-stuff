import React from 'react';
import GetItunesData from '../../../Apis/GetItunesData';
import './default.scss';

function Itunes() {
  return (
    <div className='itunes'>
      <GetItunesData />
    </div>
  );
}

export default Itunes;
