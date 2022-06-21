import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {geoAlbersUsa, geoPath} from 'd3';
import * as topojson from "topojson-client";

import {theme} from '../../../../styles/Theme';
import Grid from '../../../Grid';
import Description from '../../../Description';
import { StyledMap } from './Map.styles';

// https://bl.ocks.org/mbostock/4090848

function ProjectionAlbers() {
    const map = useRef();

    useEffect(()=> {
        const container_parent = document.querySelector('.display');
        const margins = {top: 0, right: 20, bottom: 20, left: 20};
        const width = container_parent.offsetWidth;
        const height = width * .6;

        const vis = d3.select(map.current)
            .attr('width', width + margins.left + margins.right)
            .attr('height', height + margins.top + margins.bottom)

        const projection = geoAlbersUsa()
            // .scale(width)
            // .translate([ width/2, height/2 ]);
        
        const path = geoPath()
            // .projection(projection);

        // var path = d3.geoPath();

        d3.json('https://d3js.org/us-10m.v1.json')
            .then(function(us, error){
                if (error) throw error;

                console.log('us: ', us)

                vis.append('g')
                    .attr('class', 'states')
                        .selectAll('path')
                            .data(topojson.feature(us, us.objects.states).features)
                                .enter().append('path')
                                    .attr('d', path)
                                    .attr('fill', theme.d3.charts.colors.green.one)
                                        .each(function(d) {
                                            d3.select(this).on('mouseover', user_interaction)
                                            d3.select(this).on('mouseout', user_interaction)
                                        })

                vis.append('path')
                    .attr('class', 'state-borders')
                    .attr('d', path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })))
                    .attr('fill', 'none')
                    .attr('stroke', theme.d3.charts.colors.grays.white)
                    .attr('stroke-width', 0.5)
                    .style('stroke-linejoin', 'round')
                    .style('stroke-linecap', 'round')
            });

            function user_interaction(e, d){
                // console.log('mouseevent: ', e)
                // console.log('object: ', d)

                d3.select(this)
                    .attr('fill', () => e.type === 'mouseover' ? 'orange' : theme.d3.charts.colors.green.one)
                    .style('cursor', 'pointer')
            }
            
    });

    return (
        <>
            <Description title="Albers Projection - USA" />
            <Grid>
                <StyledMap className="display">
                    <div id="chart">
                        <svg ref={map}></svg>
                    </div>
                </StyledMap>
            </Grid>
        </>
    )
}

export default ProjectionAlbers;
