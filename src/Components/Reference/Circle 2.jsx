import { StyledShapes } from './Shapes.styles';

function Circle({ classNames }) {
    return (
        <StyledShapes className={`circle ${classNames}`}></StyledShapes>
    )
  }
  
  export default Circle;