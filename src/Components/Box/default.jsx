import React from 'react';
import './default.scss';

function Box(props) {
    const {animation} = props;

    return (
        <>
            {animation && (
                <>
                    <div className="cont">
                        <div className={`box ${animation}`}>
                            <h3>Text</h3>
                        </div>
                    </div>
                </>
                
            )}
       </>
    )
  }
  
  export default Box;