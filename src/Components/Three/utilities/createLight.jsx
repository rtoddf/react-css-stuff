import * as THREE from 'three';

export function createLight(type, color, intensity, distance){
    let light;

    type = type || 'point';
    color = color || 0xffffff;
    intensity = intensity || 2;
    distance = distance || 2000;

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

    return light;
}