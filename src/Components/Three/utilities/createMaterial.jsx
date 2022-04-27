import * as THREE from 'three';

export function createMaterial(
        type,
        color
    ){

    let material;

    type = type || 'meshPhong';
    color = color || 0xffffff;

    switch (type) {
        case 'meshPhong':
            material = new THREE.MeshPhongMaterial({ color });
            break;
        case 'meshPhong':
            material = new THREE.MeshPhongMaterial({ color });
            break;
        default:
            material = new THREE.MeshPhongMaterial({ color });
        }

    return material;
}