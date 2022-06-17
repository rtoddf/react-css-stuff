import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import Description from '../../../Description';

import {theme} from '../../../../styles/Theme';

function PolarClock() {
    const polarClock = useRef();
    const pi = Math.PI;

    const fields = () => {
        var d = new Date()

        const fsec = d3.timeFormat('%S s');
        const fmin = d3.timeFormat('%M m');
        const fhou = d3.timeFormat('%H h');
        const fwee = d3.timeFormat('%a');
        const fdat = d3.timeFormat('%d d');
        const fmon = d3.timeFormat('%b');

        function days(){
            return 32 - new Date(d.getYear(), d.getMonth(), 32).getDate()
        }

        var second = (d.getSeconds() + d.getMilliseconds() / 1000) / 60,
            minute = (d.getMinutes() + second) / 60,
            hour = (d.getHours() + minute) / 24,
            weekday = (d.getDay() + hour) / 7,
            date = (d.getDate() - 1 + hour) / days(),
            month = (d.getMonth() + date) / 12

        return [
            {value: second,  index: .7, text: fsec(d)},
            {value: minute,  index: .6, text: fmin(d)},
            {value: hour,    index: .5, text: fhou(d)},
            {value: weekday, index: .4, text: fwee(d)},
            {value: date,    index: .3, text: fdat(d)},
            {value: month,   index: .2, text: fmon(d)},
        ]
	}
    
    useEffect(() => {
        const container_parent = document.querySelector('.display');
        const width = container_parent.offsetWidth;
        const height = width;
        const radius = (width / 2) / 2;

        console.log('fields: ', fields())

        const vis = d3.select(polarClock.current)
            .attr('width', width)
            .attr('height', height)
            .attr('preserveAspectRatio', 'xMinYMid')
            .attr('viewBox', `0 0 ${width} ${height}`)
            .append('g')
                .attr('transform', `translate(${radius},${radius})`)

    })

    return (
        <>
            <Description title="Polar Clock" />
            <div className="display">
                <div id="chart">
                    <svg ref={polarClock}></svg>
                </div>
            </div>
        </>
    )
}

export default PolarClock;
