import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import Grid from '../../../Grid';
import Description from '../../../Description';

import {theme} from '../../../../styles/Theme';

function AnalogClockTwo() {
    const analogClock = useRef();
    const pi = Math.PI;

    const fields = () => {
		const currentTime = new Date()
        // const ms = currentTime.getMilliseconds()
		const second = currentTime.getSeconds()
		const minute = currentTime.getMinutes()
		// Add the fraction of seconds elapsed if you prefer a smooth-sweeping minute handfairy dust. 
		const hour = currentTime.getHours() + minute / 60

        console.log( (minute<10?'0':'') + minute );

		return [
			{'unit': 'seconds', 'value': second},
            {'unit': 'minutes', 'value': minute},
            {'unit': 'hours', 'value': hour}
		]
	}
    
    useEffect(() => {
        const scaleSecs = d3.scaleLinear()
            .domain([ 0, 59 + 999/1000 ])
            .range([ 0, 2 * pi ])

        const container_parent = document.querySelector('.display');
        const margins = {top: 20, right: 20, bottom: 20, left: 20};
        const width = (container_parent.offsetWidth - margins.left - margins.right) / 2;
        const height = ((width * 0.8) - margins.top - margins.bottom);
        const radius = Math.min(width, height) / 2 - margins.top;

        const vis = d3.select(analogClock.current)
            .attr('width', width)
            .attr('height', height)
            .attr('preserveAspectRatio', 'xMinYMid')
            .attr('viewBox', `0 0 ${(width + margins.left + margins.right)} ${(height + margins.top + margins.bottom)}`)
            .append('g')
                .attr('transform', `translate(${width / 2},${height / 2})`)

        vis.append('circle')
            .attr('r', (height / 2) - 10)
            .attr('fill', 'rgba(0,0,0,1)')
            .attr('class', 'clock')
            .attr('stroke', theme.d3.charts.colors.grays.black)
            .attr('stroke-width', 3)

        const secondArc = d3.arc()
            .innerRadius(0)
            .outerRadius(((height / 2) + 10) - 20)
            .startAngle((d) => scaleSecs(d.value))
            .endAngle((d) => scaleSecs(d.value))

        const interval = setInterval(() => {
            let data = fields();
            vis.selectAll('.clockhand').remove()

            vis.selectAll('.clockHand')
                .data(data).enter()
                    .append('path')
                        .attr('d', (d) => {
                            if(d.unit === 'seconds') return secondArc(d)
                        })
                        .attr('class', 'clockhand')
                        .attr('stroke', theme.d3.charts.colors.grays.white)
                        .style('.opacity', .5)
                        .attr('stroke-width', (d) => {
                            if(d.unit === 'seconds') return 2
                        })

            vis.selectAll('.hours')
                .data(data).enter()
                    .append('text')
                        .attr('class', 'hours')
                        .attr('fill', 'white')
                        .attr('text-anchor', 'end')
                        .attr('x', radius / 20)
                        .attr('y', radius / 20 + 50)
                        .style('font-size', radius / 1.5)
                        .text(function(d){
                            return `${(d.unit === 'hours') ? Math.floor(d.value) : ''}:`
                        })

            vis.selectAll('.minutes')
                    .data(data).enter()
                        .append('text')
                            .attr('class', 'minutes')
                            .attr('fill', 'white')
                            .attr('text-anchor', 'start')
                            .attr('x', radius / 10)
                            .attr('y', radius / 20 + 50)
                            .style('font-size', radius / 1.5)
                            .text(function(d){
                                console.log('d: ', d)
                                return `${(d.unit === 'minutes') ? (d.value<10?'0':'') + d.value : ''}`
                        })
        }, 1000);

        return () => clearInterval(interval);
    })

    return (
        <>
            <Description title="Analog Clock Two" />
            <Grid>
                <div className="display">
                    <div id="chart">
                        <svg ref={analogClock}></svg>
                    </div>
                </div>
            </Grid>
            
        </>
    )
}

export default AnalogClockTwo;
