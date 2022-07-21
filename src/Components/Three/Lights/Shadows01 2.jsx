import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from '../Geometries/Geometry.styles';

function Plane02() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            1000
        );
        // position the camera so you're not on top of the geometry
        camera.position.x = 4;
        camera.position.y = 4;
        camera.position.z = 8;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0xff7700, 1);
        pointLight01.position.set( 8, 10, 10 );
        pointLight01.castShadow = true;

        const pointLight02 = new THREE.PointLight(0xae0000, 1);
        pointLight02.position.set( -8, 10, 10 );
        pointLight02.castShadow = true;

        const spotLight03 = new THREE.SpotLight(0xffffff, 1)
        spotLight03.position.set( 0, 10, 0 );
        spotLight03.angle = Math.PI / 8;
        spotLight03.penumbra = 0.3;
        spotLight03.castShadow = true;
        spotLight03.shadow.focus = 1; // default
        spotLight03.decay = 2;
        spotLight03.distance = 50;

        scene.add(pointLight01, pointLight02, spotLight03);
        // const helper = new THREE.CameraHelper( spotLight03.shadow.camera );
        // scene.add( helper );

		// scene.add(
        //     new THREE.PointLightHelper(pointLight01),
        //     new THREE.PointLightHelper(pointLight02),
        //     new THREE.SpotLightHelper(spotLight03)
        // )

        // create the geometry
        const plane = new THREE.PlaneGeometry(80, 20, 32, 32);
        const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, dithering: true });

        const planeMesh = new THREE.Mesh(plane, planeMaterial);
        planeMesh.receiveShadow = true;
        planeMesh.rotation.x = -(Math.PI/2)
        planeMesh.position.y = -4;
        scene.add(planeMesh);

        // create the sphere01 geometry
        const sphere = new THREE.BoxGeometry(2, 2, 2);
        const sphereMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
        });
        const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
        sphereMesh.position.y = 1;
        sphereMesh.position.z = 1;
        sphereMesh.castShadow = true;
        scene.add(sphereMesh);

        let dyPerFrame = 1; // how to move in a single frame
        const speed = .05;

        const animate = () => {
            sphereMesh.rotation.x += 0.02;
            sphereMesh.rotation.y += 0.02;
            sphereMesh.position.y += dyPerFrame * speed; // move ball
            if(sphereMesh.position.y > 3) dyPerFrame = -1; // if we're too far right, move towards the left
            if(sphereMesh.position.y < -2) dyPerFrame =  1; // if we're too far left, move towards the right again
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Shadows &amp; Light" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Plane02;
