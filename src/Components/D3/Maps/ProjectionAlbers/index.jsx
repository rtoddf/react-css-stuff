import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import * as topojson from "topojson-client";

import {theme} from '../../../../styles/Theme';
import Grid from '../../../Grid';
import Description from '../../../Description';

import data from '../../data/maps/us.json';
import { StyledMap } from './Map.styles';

function ProjectionAlbers() {
    const map = useRef();

    useEffect(()=> {
        const container_parent = document.querySelector('.display');
        const margins = {top: 0, right: 20, bottom: 20, left: 20};
        const width = container_parent.offsetWidth;
        const height = width * .6;

        // set the colors
        // const colors = d3.scaleOrdinal([
        //     theme.d3.charts.colors.orange.one,
        //     theme.d3.charts.colors.blue.one,
        //     theme.d3.charts.colors.green.one,
        //     theme.d3.charts.colors.red.one,
        //     theme.d3.charts.colors.purple.one]
        // );

        const vis = d3.select(map.current)
            .attr('width', width + margins.left + margins.right)
            .attr('height', height + margins.top + margins.bottom)

        const projection = d3.geoAlbersUsa()
            // .scale(width)
            // .translate([ width/2, height/2 ]);
        
        const path = d3.geoPath()
            .projection(projection);

        // var path = d3.geoPath();

        d3.json('https://d3js.org/us-10m.v1.json')
            .then(function(us, error){
                console.log('us: ', us)
                // console.log('topology: ', topojson.feature(topology, topology.objects.land))

                vis.append("g")
                    .attr("class", "states")
                    .selectAll("path")
                    .data(topojson.feature(us, us.objects.states).features)
                    .enter().append("path")
                    .attr("d", path)
                    .style('fill', 'none')

                    vis.append("path")
                        .attr("class", "state-borders")
                        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
            });

        // d3.json('https://d3js.org/us-10m.v1.json', function(error, topology){

        //     

        //     vis.append('path')
        //         .datum(topojson.feature(topology, topology.objects.land))
        //             .attr('d', path)
        //             .attr('fill', '#baba71')
        //             .attr('stroke', '#333')
        //             .attr('stroke-width', 0.5)
        // })        
            
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
