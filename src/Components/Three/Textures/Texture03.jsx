import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from '../Geometries/Geometry.styles';

import sphereTextureImage from '../images/checkerboard.jpg';
import planeTextureImage from '../images/metal.jpg';

function Texture03() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a scene
        const scene = new THREE.Scene();

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            10000
        );
        camera.position.z = 15;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0xffffff, 1);
        pointLight01.position.set( 5, 2, 10 );
        pointLight01.castShadow = true;
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xbaba71, 1.5);
        pointLight02.position.set( -5, 2, 10 );
        pointLight02.castShadow = true;
        scene.add(pointLight02);

        scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        const planeTexture = new THREE.TextureLoader().load(planeTextureImage);
        planeTexture.wrapS = THREE.RepeatWrapping;
        planeTexture.wrapT = THREE.RepeatWrapping;

        const plane = new THREE.PlaneGeometry(40, 20, 32, 32);
        const planeMaterial = new THREE.MeshStandardMaterial({
            map: planeTexture
        });
        const planeMesh = new THREE.Mesh(plane, planeMaterial);
        planeMesh.rotation.x += -1.5;
        // move it down so we can see it
        planeMesh.position.set(0, -5, 0);
        planeMesh.receiveShadow = true;
        scene.add(planeMesh)

        const sphereTexture = new THREE.TextureLoader().load(sphereTextureImage);
        sphereTexture.wrapS = THREE.RepeatWrapping;
        sphereTexture.wrapT = THREE.RepeatWrapping;

        const sphere = new THREE.SphereGeometry( 5, 32, 32 );
        const sphereMaterial = new THREE.MeshStandardMaterial({
            map: sphereTexture,
            // side: THREE.BackSide
        });
        const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
        sphereMesh.castShadow = true;
        scene.add(sphereMesh);

        const animate = () => {
            sphereMesh.rotation.y += 0.03;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Texture Two" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Texture03;
