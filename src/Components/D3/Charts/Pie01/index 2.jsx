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
        const margins = {top: 20, right: 20, bottom: 20, left: 20};
        const width = (container_parent.offsetWidth - margins.left - margins.right) / 2;
        const height = ((width * 0.8) - margins.top - margins.bottom);
        const radius = Math.min(width, height) / 2 - margins.top;

        // get positions for each data object
        const piedata = d3.pie().value(d => d.percentage)(data);
        // set the arc
        const arc = d3.arc()
            .innerRadius(radius)
            .outerRadius(radius / 2);

        // set the colors
        const colors = d3.scaleOrdinal([
            theme.d3.charts.colors.orange.one,
            theme.d3.charts.colors.blue.one,
            theme.d3.charts.colors.green.one,
            theme.d3.charts.colors.red.one,
            theme.d3.charts.colors.purple.one]
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
                    .on('mousemove', (e, d) => {
                        console.log('e: ', e)
                        console.log('d: ', d)
                    })
                    .each(function(d) {
                        d3.select(this).on('mouseover', user_interaction)
                        d3.select(this).on('mouseout', user_interaction)
                    })

        const tooltip = d3.select('#chart')
            .append('div')
                .attr('class', 'tooltip')

        function user_interaction(e, d){
            const rad = e.type === 'mouseover' ? radius + 20 : radius;
            const tooltip_opacity = e.type === 'mouseover' ? 1 : 0
            // const delay = e.type === 'mouseover' ? 0 : 150
            const text_opacity = e.type === 'mouseover' ? 1 : 0

            tooltip
                .html(function () {
                    return `<span>${d.data.race}</span>`;
                })
                .style('top', `${e.pageY - 50}px`)
                .style('left', `${e.pageX - 50}px`)
                .transition()
                    .duration(500)
                .style('opacity', tooltip_opacity)

            d3.select(this)
                .transition()
                    .attrTween('d', function (d) {
                        // d.percentage = d.data.percentage;
                        console.log('d.outerRadius: ', d.outerRadius)
                        const i = d3.interpolate(d.outerRadius, rad);
                        return function (t) {
                          d.outerRadius = i(t);
                          return arc(d);
                        };
                    })
                    .style('cursor', 'pointer')

            d3.select('.percentage').remove();

            vis.append('text')
                .attr('class', 'percentage')
                .attr('text-anchor', 'middle')
                .attr('x', radius / 20)
                .attr('y', radius / 20 + 10)
                .style('font-size', radius / 4)
                .style('opacity', text_opacity)
                .text(() => `${(d.data.percentage * 100).toFixed(1)}%`)
                    // .transition()
                    //     .delay(delay)
                    //     .duration(500)
        }
            
    });

    return (
        <>
            <Description title="Population Pie Chart - HI" copy="This donut chart shows the US Census 2010 data for Hawaii. The user can hover over each arc, which will animate, and see a tooltip with race. The percentage is also presented in the center of the chart. More data can be added to the tooltip and the center of the chart. Static population data from the US Census 2010 (Hawaii). Hover over an arc to see the percentage and race." />
            <Grid>
                <StyledPie01 className="display">
                    <div id="chart">
                        <svg ref={pieChart}></svg>
                    </div>
                </StyledPie01>
            </Grid>
        </>
    )
}

export default Pie01;
