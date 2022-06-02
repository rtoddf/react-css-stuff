import { StyledShapes } from './Shapes.styles';

function Box({ animation }) {
    return (
        <StyledShapes>
            {animation && (
                <div className="cont">
                    <div className={`box ${animation}`}>
                        <h3>Text</h3>
                    </div>
                </div>
            )}
       </StyledShapes>
    )
  }
  
  export default Box;