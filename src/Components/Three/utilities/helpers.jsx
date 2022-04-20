import * as THREE from 'three';
import settings from '../Wireframes/settings';

export function getShapeSettings(shape){
    let geometry = '';

    if(shape === 'cube'){
        geometry = new THREE.BoxGeometry(
            settings[shape].width,
            settings[shape].height,
            settings[shape].depth
        )
    } else if(shape === 'sphere') {
        geometry = new THREE.SphereGeometry(
            settings[shape].radius,
            settings[shape].segmentsWidth,
            settings[shape].segmentsHeight
        );
    } else if(shape === 'circle') {
        geometry = new THREE.CircleGeometry(
            settings[shape].radius,
            settings[shape].segmentsWidth,
            settings[shape].segmentsHeight
        );
    } else if(shape === 'cone') {
        geometry = new THREE.ConeGeometry(
            settings[shape].radius,
            settings[shape].height,
            settings[shape].segments
        );
    } else if(shape === 'cylinder') {
        geometry = new THREE.CylinderGeometry(
            settings[shape].radiusTop,
            settings[shape].radiusBottom,
            settings[shape].height,
            settings[shape].segmentsRadius,
            settings[shape].segmentsHeight,
            settings[shape].openEnded
        );
    } else if(shape === 'dodecahedron'){
        geometry = new THREE.DodecahedronGeometry(
            settings[shape].radius,
            settings[shape].detail
        );
    } else if(shape === 'icosahedron') {
        geometry = new THREE.IcosahedronGeometry(
            settings[shape].radius,
            settings[shape].detail
        );
    } else if(shape === 'octahedron') {
        geometry = new THREE.OctahedronGeometry(
            settings[shape].radius,
            settings[shape].detail
        );
    } else if(shape === 'tetrahedron') {
        geometry = new THREE.TetrahedronGeometry(
            settings[shape].radius,
            settings[shape].detail
        );
    } else if(shape === 'ring') {
        geometry = new THREE.RingGeometry(
            settings[shape].innerRadius,
            settings[shape].outerRadius,
            settings[shape].segments
        );
    } else {
        geometry = new THREE.PlaneGeometry(
            settings[shape].width,
            settings[shape].depth,
            settings[shape].segmentsWidth,
            settings[shape].segmentsDepth
        )
    }

    return geometry;
}