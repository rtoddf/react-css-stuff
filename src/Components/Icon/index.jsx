import { StyledIcon } from './Icon.styled';

function Icon({ iconClass, animation }) {
    return (
        <StyledIcon className={`${iconClass} ${animation}`}></StyledIcon>
    )
  }
  
  export default Icon;