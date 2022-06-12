import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import Grid from '../Grid';

import image from './images/john-constantine.jpg'
import { StyledGsap } from './Gsap.styled';

// docs: https://greensock.com/react/

function Learn01() {
  let imageItem = useRef();
  let textItem = useRef()
  
  useEffect(() => {
    // imageItem.style.display = 'none';
    gsap.to(
      imageItem.current,
      .8,
      { 
        opacity: 1,
        y: -20,
        ease: "power3.inOut"
      }
    );

    gsap.to(
      textItem.current,
      .8,
      { 
        opacity: 1,
        y: -20,
        ease: "power3.inOut",
        delay: .2
      }
    );
  });

  return (
    <Grid>
      <StyledGsap>
        <img
          ref={imageItem}
          src={image}
          alt="John"
        />
        <h3 ref={textItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </StyledGsap>
    </Grid>
  );
}

export default Learn01;
