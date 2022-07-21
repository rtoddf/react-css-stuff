import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import Description from '../../Description';
import Grid from '../../Grid';

import { StyledLearn02 } from './Learn02.styled';

// docs: https://greensock.com/react/
// Creating a ref for each and every element we want to animate can add a lot of noise to our code. We can avoid this by making use of GSAP’s selector utility to easily select descendant elements.

function Learn02() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.to(
      // Target ALL descendants with the class of .box
      q('.box'),
      {
        width: '100px',
        height: '100px',
        x: 800,
        rotation: 27,
        borderWidth: 10,
        borderRadius: '8px',
        duration: 2,
      }
    )
  })
  
  return (
    <Grid>
      <Description title="Targeting descendant elements" copy="Creating a ref for each and every element we want to animate can add a lot of noise to our code. We can avoid this by making use of GSAP’s selector utility to easily select descendant elements." />
      <StyledLearn02 ref={el}>
        <div class="box green"></div>
        <div class="box orange"></div>
        <div class="box gray"></div>
      </StyledLearn02>
    </Grid>
  );
}

export default Learn02;
