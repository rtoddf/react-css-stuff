import * as THREE from 'three';

const π = Math.PI;

export function createBoxShape(
    width,
    height,
    depth,
    color
    ){
        width = width || 100;
        height = height || 100;
        depth = depth || 100;
        color = color || 0xffffff;

        // width — Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
        // height — Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
        // depth — Depth; that is, the length of the edges parallel to the Z axis. Optional; defaults to 1.
        // widthSegments — Number of segmented rectangular faces along the width of the sides. Optional; defaults to 1.
        // heightSegments — Number of segmented rectangular faces along the height of the sides. Optional; defaults to 1.
        // depthSegments — Number of segmented rectangular faces along the depth of the sides. Optional; defaults to 1.

        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material)

    return mesh;
}

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
    
        const geometry = new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded);

    return geometry;
}

export function createCircleShape(
    radius,
    segments,
    color,
    thetaStart,
    thetaEnd
    ){
        radius = radius || 100;
        segments = segments || 100;
        color = color || 0x002200;
        thetaStart = thetaStart || 2 * π;
        thetaEnd = thetaEnd || 2 * π;

        // radius — Radius of the circle, default = 1.
        // segments — Number of segments (triangles), minimum = 3, default = 8.
        // thetaStart — Start angle for first segment, default = 0 (three o'clock position).
        // thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
    
        const geometry = new THREE.CircleGeometry(radius, segments, color, thetaStart, thetaEnd);

    return geometry;
}

export function createCylinderShape(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded
    ){
        radiusTop = radiusTop || 30;
        radiusBottom = radiusBottom || 60;
        height = height || 100;
        radialSegments = radialSegments || 100;
        heightSegments = heightSegments || 30;
        openEnded = openEnded || false;
        
        // radiusTop — Radius of the cylinder at the top. Default is 1.
        // radiusBottom — Radius of the cylinder at the bottom. Default is 1.
        // height — Height of the cylinder. Default is 1.
        // radialSegments — Number of segmented faces around the circumference of the cylinder. Default is 8
        // heightSegments — Number of rows of faces along the height of the cylinder. Default is 1.
        // openEnded — A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
        // thetaStart — Start angle for first segment, default = 0 (three o'clock position).
        // thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
    
        const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded)

    return geometry;
}

export function createTorusShape(
    radius,
    tube,
    color,
    radialSegments,
    tubularSegments,
    arc
    ){
        radius = radius || 1;
        tube = tube || 0.4;
        color = color || 0xffffff;
        radialSegments = radialSegments || 8;
        tubularSegments = tubularSegments || 6;
        arc = arc || 2 * π;

        // radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
        // tube — Radius of the tube. Default is 0.4.
        // radialSegments — Default is 8
        // tubularSegments — Default is 6.
        // arc — Central angle. Default is Math.PI * 2.

        const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)

    return geometry;
}

export function createPlaneShape(
    width,
    height,
    wSegments,
    hSegments
    ){
        width = width || 200;
        height = height || 200;
        wSegments = wSegments || 32;
        hSegments = hSegments || 32;

        // width — Width along the X axis. Default is 1.
        // height — Height along the Y axis. Default is 1.
        // widthSegments — Optional. Default is 1.
        // heightSegments — Optional. Default is 1.

        const geometry = new THREE.PlaneGeometry(width, height, wSegments, hSegments)

    return geometry;
}

