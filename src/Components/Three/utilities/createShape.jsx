import * as THREE from 'three';

export function createConeShape(
    radius,
    height,
    radialSegments,
    heightSegments,
    openEnded
    ){
        radius = radius || 150;
        height = height || 350;
        radialSegments = radialSegments || 50;
        heightSegments = heightSegments || 50;
        openEnded = openEnded || false;

        // radius — Radius of the cone base. Default is 1.
        // height — Height of the cone. Default is 1.
        // radialSegments — Number of segmented faces around the circumference of the cone. Default is 8
        // heightSegments — Number of rows of faces along the height of the cone. Default is 1.
        // openEnded — A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
        // thetaStart — Start angle for first segment, default = 0 (three o'clock position).
        // thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
    
        const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded);

    return coneGeometry;
}

export function createCircleShape(
    radius,
    segments,
    color,
    thetaStart,
    thetaEnd
    ){

        console.log('radius: ', radius)
        console.log('segments: ', segments)
        console.log('color: ', color)

        radius = radius || 100;
        segments = segments || 100;
        color = color || 0x002200;
        thetaStart = thetaStart || 0;
        thetaEnd = thetaEnd || 6.3;

        // radius — Radius of the circle, default = 1.
        // segments — Number of segments (triangles), minimum = 3, default = 8.
        // thetaStart — Start angle for first segment, default = 0 (three o'clock position).
        // thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
    
        const circleGeometry = new THREE.CircleGeometry(radius, segments);
        // const circleGeometry = new THREE.CircleGeometry(radius, segments, color, thetaStart, thetaEnd);
        // const circleGeometry = new THREE.CircleGeometry( 5, 32 );

    return circleGeometry;
}