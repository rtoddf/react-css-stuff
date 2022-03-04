import React from 'react';

function Box(props) {
    const {animation} = props;

    return (
        <>
            {animation && (
                <div className={animation}>
                    <div className="cont">
                        <div className="box">
                            <h3>Text</h3>
                        </div>
                    </div>
                </div>
            )}
       </>
    )
  }
  
  export default Box;