import * as THREE from 'three';

export function createRenderer(
        container,
        canvasWidth,
        canvasHeight,
        antialias,
        alpha,
        color,
    ){

    antialias = antialias || true;
    alpha = alpha || true;
    color = color || 0xffffff;

    // create a renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: antialias,
        alpha: alpha,
    });

    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    container.append(renderer.domElement);

    return renderer;
}

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