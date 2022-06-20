import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import Description from '../../../Description';

import {theme} from '../../../../styles/Theme';

function AnalogClock() {
    const analogClock = useRef();
    const pi = Math.PI;

    const fields = () => {
		const currentTime = new Date()
        // const ms = currentTime.getMilliseconds()
		const second = currentTime.getSeconds()
		const minute = currentTime.getMinutes()
		// Add the fraction of seconds elapsed if you prefer a smooth-sweeping minute handfairy dust. 
		const hour = currentTime.getHours() + minute / 60

		return [
			{'unit': 'seconds', 'numeric': second},
            {'unit': 'minutes', 'numeric': minute},
            {'unit': 'hours', 'numeric': hour}
		]
	}
    
    useEffect(() => {
        const scaleSecs = d3.scaleLinear()
            .domain([ 0, 59 + 999/1000 ])
            .range([ 0, 2 * pi ])

        const scaleMins = d3.scaleLinear()
            .domain([ 0, 59 + 59/60 ])
            .range([ 0, 2 * pi ])

        const scaleHours = d3.scaleLinear()
            .domain([ 0, 11 + 59/60 ])
            .range([ 0, 2 * pi ])

        const container_parent = document.querySelector('.display');
        const margins = {top: 20, right: 20, bottom: 20, left: 20};
        const width = (container_parent.offsetWidth - margins.left - margins.right) / 2;
        const height = ((width * 0.8) - margins.top - margins.bottom);

        const vis = d3.select(analogClock.current)
            .attr('width', width)
            .attr('height', height)
            .attr('preserveAspectRatio', 'xMinYMid')
            .attr('viewBox', `0 0 ${(width + margins.left + margins.right)} ${(height + margins.top + margins.bottom)}`)
            .append('g')
                .attr('transform', `translate(${width / 2},${height / 2})`)

        vis.append('circle')
            .attr('r', (height / 2) - 10)
            .attr('fill', 'rgba(0,0,0,.25)')
            .attr('class', 'clock')
            .attr('stroke', theme.d3.charts.colors.grays.black)
            .attr('stroke-width', 3)

        vis.append('circle')
            .attr('r', height * .02)

        const secondArc = d3.arc()
            .innerRadius(0)
            .outerRadius(((height / 2) - 10) * .85)
            .startAngle((d) => scaleSecs(d.numeric))
            .endAngle((d) => scaleSecs(d.numeric))

        const minuteArc = d3.arc()
            .innerRadius(0)
            .outerRadius(((height / 2) - 10) * .85)
            .startAngle((d) => scaleMins(d.numeric))
            .endAngle((d) => scaleMins(d.numeric))

        const hourArc = d3.arc()
            .innerRadius(0)
            .outerRadius(((height / 2) - 10) * .5)
            .startAngle((d) => scaleHours(d.numeric))
            .endAngle((d) => scaleHours(d.numeric))

        const interval = setInterval(() => {
            let data = fields();
            vis.selectAll('.clockhand').remove()

            vis.selectAll('.clockHand')
                .data(data).enter()
                    .append('path')
                        .attr('d', (d) => {
                            if(d.unit === 'hours') return hourArc(d)
                            else if (d.unit === 'minutes') return minuteArc(d)
                            else return secondArc(d)
                        })
                        .attr('class', 'clockhand')
                        .attr('stroke', theme.d3.charts.colors.grays.black)
                        .attr('stroke-width', (d) => {
                            if(d.unit === 'hours') return 3
                            else if (d.unit === 'minutes') return 2
                            else return 1
                        })
        }, 1000);

        return () => clearInterval(interval);
    })

    return (
        <>
            <Description title="Analog Clock" />
            <div className="display">
                <div id="chart">
                    <svg ref={analogClock}></svg>
                </div>
            </div>
        </>
    )
}

export default AnalogClock;
