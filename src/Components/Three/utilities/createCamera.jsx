import * as THREE from 'three';

export function createCamera(
        canvasWidth,
        canvasHeight,
        fov,
        near,
        far,
        positionx,
        positiony,
        positionz
    ){

    console.log('positionz: ', positionz)

    fov = fov || 50;
    near = near || 1;
    far = far || 5000;
    
    positionx = positionx || 0;
    positiony = positiony || 0;
    positionz = positionz || 600;

    // create a camera
    const camera = new THREE.PerspectiveCamera(
        fov, // field of view
        canvasWidth / canvasHeight, // aspect ratio
        near, // near
        far // far
    );

    // position the camera so you're not on top of the geometry
    camera.position.x = positionx;
    camera.position.y = positiony;
    camera.position.z = positionz;

    return camera;
}