import React from 'react';

function Box(props) {
    const {animation} = props;

    return (
        <>
            {animation && (
                <div class={animation}>
                    <div className="container-transforms">
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