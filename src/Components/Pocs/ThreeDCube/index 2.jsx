import { useState } from 'react';
import Grid from '../../Grid';
import Description from '../../Description';
import { StyledThreeDCube, StyledOptions } from './ThreeDCube.styled';
import { StyledButton } from '../../Button/Button.styled';
import cubeInfo from './cube.json';

function ThreeDCube() {
    const [dataSet, setDataSet] = useState('set01');
    const [images, setImages] = useState(true);
    const [backFaceInvisible, setBackFaceInvisible] = useState(false);
    const [side, setSide] = useState('show-front');

    const set = cubeInfo[dataSet];

    const cubeSides = set.map((side, index) => {
        return <>
            <figure key={index} className={`side-${side.label}`}>
                {images ? <img src={side.image} alt={side.alt} /> : side.label}
                {/* <h4>Name</h4> */}
            </figure>
        </>;
    });

    const buttons = set.map((side, index) => {
        return <StyledButton
            key={index}
            onClick={() => setSide(`show-${side.label}`)}
        >
            {images ? side.alt : side.label}
        </StyledButton>;
    });

    return (
        <>
            <Description title="3-D Cube" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            <Grid cols="1">
                <>
                    <StyledThreeDCube size="400px">
                        <div className={`cube ${side} ${backFaceInvisible ? 'panels-backface-invisible' : ''}`}>
                            {cubeSides}
                        </div>
                    </StyledThreeDCube>

                    <StyledOptions>
                        <div className="side-options">
                            {buttons}
                        </div>
                        
                        <div className="display-options">
                            <StyledButton onClick={() => setImages(!images)}>
                                Hide/Show Images
                            </StyledButton>
                            <StyledButton className={`${images ? 'hidden' : ''}`} onClick={() => setBackFaceInvisible(!backFaceInvisible)}>
                                Toggle Backface Visibility
                            </StyledButton>
                        </div>

                        <div className="toggle-options">
                            <div className="toggle-switch-label">Switch dataset</div>
                            <label className="switch">
                                
                                <input type="checkbox" onClick={() => setDataSet(dataSet === 'set01' ? 'set02' : 'set01')} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        
                    </StyledOptions>
                </>
            </Grid>
        </>
    )
}

export default ThreeDCube;
