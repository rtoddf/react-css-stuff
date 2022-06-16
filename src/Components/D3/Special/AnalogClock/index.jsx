import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import Description from '../../../Description';

function AnalogClock() {
    return (
        <>
            <Description title="Analog Clock" />
            <div className="display">
                <div id="chart">
                    {/* <svg ref={pieChart}></svg> */}
                </div>
            </div>
        </>
    )
}

export default AnalogClock;
