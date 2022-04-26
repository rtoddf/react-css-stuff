import * as THREE from 'three';

export function createLight(
        type,
        color,
        intensity, 
        distance,
        positionx,
        positiony,
        positionz
    ){

    let light;

    type = type || 'point';
    color = color || 0xffffff;
    intensity = intensity || 1;
    distance = distance || 2000;

    positionx = positionx || 0;
    positiony = positiony || 0;
    positionz = positionz || 0;

    switch (type) {
        case 'point':
            light = new THREE.PointLight(color, intensity, distance);
            break;
        case 'ambient':
            light = new THREE.AmbientLight(color, intensity);
            break;
        default:
            light = new THREE.PointLight(color, intensity, distance);
        }

    light.position.set(positionx, positiony, positionz);

    return light;
}