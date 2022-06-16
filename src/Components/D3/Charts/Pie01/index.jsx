import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {theme} from '../../../../styles/Theme';
import Grid from '../../../Grid';
import Description from '../../../Description';

import data from '../../data/population.json';
import { StyledPie01 } from './Pie01.styles';

function Pie01() {
    const pieChart = useRef();
    console.log('data: ', data)

    useEffect(()=> {
        const container_parent = document.querySelector('.display');
        const chart_container = document.querySelector('#chart');
        const margins = {top: 20, right: 20, bottom: 20, left: 20};
        const width = container_parent.offsetWidth - margins.left - margins.right;
        const height = (width * 0.8) - margins.top - margins.bottom;
        const radius = Math.min(width, height) / 2 - margins.top;

        // get positions for each data object
        const piedata = d3.pie().value(d => d.percentage)(data);
        // set the arc
        const arc = d3.arc().innerRadius(radius).outerRadius(radius / 2);

        // set the colors
        const colors = d3.scaleOrdinal([
            theme.colors.orange,
            theme.colors.blue,
            theme.colors.green,
            theme.colors.red,
            theme.colors.purple]
        );

        const vis = d3.select(pieChart.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
                .attr('transform', `translate(${width/2 + margins.left},${height/2 + margins.top})`)

        vis.append('g').selectAll('path')
            .data(piedata)
                .join('path')
                    .attr('d', arc)
                    .attr('fill', (d, i)=>colors(i))
                    .attr('stroke', 'white')
            
    });

    return (
        <>
            <Description title="Population Pie Chart - HI" copy="This donut chart shows the US Census 2010 data for Hawaii. The user can hover over each arc, which will animate, and see a tooltip with race. The percentage is also presented in the center of the chart. More data can be added to the tooltip and the center of the chart. Static population data from the US Census 2010 (Hawaii). Hover over an arc to see the percentage and race." />
            <StyledPie01 className="display">
                <div id="chart">
                    <svg ref={pieChart}></svg>
                </div>
            </StyledPie01>
        </>
    )
}

export default Pie01;
