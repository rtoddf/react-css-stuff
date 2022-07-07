import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {theme} from '../../../../styles/Theme';
import Grid from '../../../Grid';
import Description from '../../../Description';

import dataSource from '../../data/letter-frequency.tsv';
import { StyledBar01 } from './Bar01.styles';

function Bar01() {
    const barChart = useRef();

    useEffect(()=> {
        const container_parent = document.querySelector('.display');
        const margins = {top: 20, right: 20, bottom: 40, left: 40};

        const width = container_parent.offsetWidth - margins.left - margins.right;
        const height = (container_parent.offsetWidth * 0.5) - margins.top - margins.bottom;

        const x = d3.scaleBand().rangeRound([0, width - margins.right]).padding(0.1);
	    const y = d3.scaleLinear().rangeRound([height - margins.bottom, 0]);

        const vis = d3.select(barChart.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
                .attr('transform', `translate(${margins.left}, ${margins.top})`)

        d3.tsv(dataSource)
            .then(function(data, error) {
                if (error) throw error;

                // make all intergers and positive
                data.forEach(d => d.frequency = +d.frequency);
            
                x.domain(data.map(d => d.letter));
                y.domain([0, d3.max(data, d => d.frequency)]);

                vis.append('g')
                    .selectAll('.bar')
                        .data(data)
                        .enter().append('rect')
                            .attr('class', 'bar')
                            .attr('x', d => x(d.letter))
                            .attr('y', d =>  y(d.frequency))
                            .attr('width', x.bandwidth())
                            .attr('height', d => (height - margins.bottom) - y(d.frequency))
                            .attr('fill', theme.d3.charts.colors.blue.one)

                vis.append('g')
                    .attr('transform', `translate(0, ${height - margins.bottom})`)
                    .call(d3.axisBottom(x));

                vis.append('g')
                    .call(d3.axisLeft(y).ticks(10, '%'))

                vis
                    .append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', 6)
                        .attr('dy', '0.71em')
                        .attr('text-anchor', 'end')
                        .text('Frequency');
            });
    });

    return (
        <>
            <Description title="D3 Bar Chart - Letter Frequency" />
            <Grid>
                <StyledBar01 className="display">
                    <div id="chart">
                        <svg ref={barChart}></svg>
                    </div>
                </StyledBar01>
            </Grid>
        </>
    )
}

export default Bar01;
