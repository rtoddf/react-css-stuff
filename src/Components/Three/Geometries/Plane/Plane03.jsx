import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Plane03() {
    useEffect(() => {

        let renderer, scene, camera;

			let spotLight, lightHelper, shadowCameraHelper;

			let gui;

        // create a scene
        scene = new THREE.Scene();

        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            1000
        );
        // position the camera so you're not on top of the geometry
        camera.position.z = 16;

        // create a renderer
        renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;

				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				renderer.outputEncoding = THREE.sRGBEncoding;

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 160, 40, 10 );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.minDistance = 20;
        controls.maxDistance = 500;
        controls.enablePan = false;

        const ambient = new THREE.AmbientLight( 0xffffff, 0.1 );
        scene.add( ambient );

        spotLight = new THREE.SpotLight( 0xffffff, 1 );
        spotLight.position.set( 15, 40, 35 );
        spotLight.angle = Math.PI / 4;
        spotLight.penumbra = 0.1;
        spotLight.decay = 2;
        spotLight.distance = 200;

        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 512;
        spotLight.shadow.mapSize.height = 512;
        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 200;
        spotLight.shadow.focus = 1;
        scene.add( spotLight );

        lightHelper = new THREE.SpotLightHelper( spotLight );
        scene.add( lightHelper );

        shadowCameraHelper = new THREE.CameraHelper( spotLight.shadow.camera );
        scene.add( shadowCameraHelper );

        //

        let material = new THREE.MeshPhongMaterial( { color: 0x808080, dithering: true } );

        let geometry = new THREE.PlaneGeometry( 2000, 2000 );

        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.set( 0, - 1, 0 );
        mesh.rotation.x = - Math.PI * 0.5;
        mesh.receiveShadow = true;
        scene.add( mesh );

        //

        material = new THREE.MeshPhongMaterial( { color: 0x4080ff, dithering: true } );

        geometry = new THREE.CylinderGeometry( 5, 5, 2, 32, 1, false );

        mesh = new THREE.Mesh( geometry, material );
        mesh.position.set( 0, 5, 0 );
        mesh.castShadow = true;
        scene.add( mesh );

        const animate = () => {
            // mesh.rotation.x += 0.02;
            // mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Plane - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Plane03;
