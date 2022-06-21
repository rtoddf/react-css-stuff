import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import Grid from '../../../Grid';
import Description from '../../../Description';

import {theme} from '../../../../styles/Theme';

function PolarClock() {
    const polarClock = useRef();

    const fields = () => {
        var d = new Date()

        const fsec = d3.timeFormat('%S s');
        const fmin = d3.timeFormat('%M m');
        const fhou = d3.timeFormat('%H h');
        const fwee = d3.timeFormat('%a');
        const fdat = d3.timeFormat('%d d');
        const fmon = d3.timeFormat('%b');

        const days = () => 32 - new Date(d.getYear(), d.getMonth(), 32).getDate();

        const second = (d.getSeconds() + d.getMilliseconds() / 1000) / 60;
        const minute = (d.getMinutes() + second) / 60;
        const hour = (d.getHours() + minute) / 24;
        const weekday = (d.getDay() + hour) / 7;
        const date = (d.getDate() - 1 + hour) / days();
        const month = (d.getMonth() + date) / 12;

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

        const interpolateHSL = (a, b) => {
            var i = d3.interpolateString(a, b)
            return (t) => d3.hsl(i(t))
        }

        const fill = d3.scaleLinear()
            .range([ 'hsl(252, 96%, 27%)', 'hsl(200, 96%, 34%)' ])
                .interpolate(interpolateHSL)

        const arc = d3.arc()
            .startAngle(0)
            .endAngle((d) => d.value * 2 * Math.PI)
            .innerRadius((d) => d.index * radius)
            .outerRadius((d) => (d.index + .09) * radius)

        const vis = d3.select(polarClock.current)
            .attr('width', width)
            .attr('height', height)
            .attr('preserveAspectRatio', 'xMinYMid')
            .attr('viewBox', `0 0 ${width} ${height}`)
                .append('g')
                    .attr('transform', `translate(${radius},${radius})`)

        const g = vis.selectAll('g')
            .data(fields)
                .enter()
                    .append('g')

        g.append('path')
            .attr('d', arc)
            .style('fill', d => fill(d.value))

        g.append('text')
            .attr('text-anchor','middle')
            .attr('dy', '1em')
            .text(d => d.text)

        // update arcs
        d3.timer(function(){
            let g = vis.selectAll('g')
                .data(fields)

            g.select('path')
                .attr('d', arc)
                .style('fill', d => fill(d.value))

            g.select('text')
                .attr('dy', d => d.value < .5 ? '-.5em' : '1em')
                .attr('transform', d => `rotate(${360 * d.value}) translate(0, ${-(d.index + .09 / 2) * radius}) rotate(${(d.value < .5 ? -90 : 90)})`)
                .attr('fill', theme.d3.charts.colors.grays.white)
                .attr('font-size', '10px')
                .text(d => d.text)

        })

    })

    return (
        <>
            <Description title="Polar Clock" />
            <Grid>
                <div className="display">
                    <div id="chart">
                        <svg ref={polarClock}></svg>
                    </div>
                </div>
            </Grid>
            
        </>
    )
}

export default PolarClock;
