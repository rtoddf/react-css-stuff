import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {theme} from '../../../../styles/Theme';
import Grid from '../../../Grid';
import Description from '../../../Description';

import { StyledPie01 } from './Pie01.styles';

const data = [
    {item: 'A', count: 590},
    {item: 'B', count: 291},
    {item: 'C', count: 348},
    {item: 'D', count: 145},
    {item: 'E', count: 46},
]

function Pie01() {
    const pieChart = useRef();

    useEffect(() => {
        // get positions for each data object
        const piedata = d3.pie().value(d => d.count)(data);
        // set the arc
        const arc = d3.arc().innerRadius(0).outerRadius(200);
        //colors
        const colors = d3.scaleOrdinal([
            theme.colors.orange,
            theme.colors.blue,
            theme.colors.green,
            theme.colors.red,
            theme.colors.purple]
        );
        // describe the size and position of the svg
        const svg = d3.select(pieChart.current)
            .attr('width', 600)
            .attr('height', 600)
            .append('g')
                .attr('transform', 'translate(300,300)')

        //tooltip
        const toolDiv = d3.select('#chartArea')
            .append('div')
            .style('visibility', 'hidden')
            .style('position', 'absolute')
            .style('background-color', 'white')
            .style('padding', '10px')
            .style('border', '1px solid black')

        svg.append('g')
            .selectAll('path')
            .data(piedata)
            .join('path')
                .attr('d', arc)
                .attr('fill', (d, i)=>colors(i))
                .attr('stroke', 'white')
                .on('mouseover', (e, d) => {
                    toolDiv
                        .style('visibility', 'visible')
                        .text(`${d.data.item}: ${d.data.count}`)
                })
                .on('mousemove', (e, d) => {
                    toolDiv
                        .style('top', `${e.pageY - 50}px`)
                        .style('left', `${e.pageX - 50}px`)
                })
                .on('mouseout', () => {
                    toolDiv.style('visibility', 'hidden')
                })
    });

    return (
        <>
            <Grid>
            <Description title="Pie Chart Test" />
                <StyledPie01>
                    <div id="chartArea">
                        <svg ref={pieChart}></svg>
                    </div>
                </StyledPie01>
            </Grid>
        </>
        
    )
}

export default Pie01;
