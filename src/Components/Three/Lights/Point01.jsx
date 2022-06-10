import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from '../Geometries/Geometry.styles';

function Point01() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a scene
        const scene = new THREE.Scene(canvasWidth/canvasHeight);
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            10000
        );
        // camera.position.y = 2;
        camera.position.z = 5;

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

        // create three lights
        const light1 = new THREE.PointLight(0xff7700, 1);
        light1.position.set( 5, 2, 5 );
        light1.castShadow = true
        scene.add(light1)

        const light2 = new THREE.PointLight(0xfca102, 1.5);
        light2.position.set( -5, 2, 5 );
        light2.castShadow = true
        scene.add(light2)

        scene.add(
            new THREE.PointLightHelper(light1),
            new THREE.PointLightHelper(light2)
        )

        const π = Math.PI;

        // create the cone geometry
        const plane = new THREE.PlaneGeometry(20, 20)
        const planeMaterial= new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
    
        const planeMesh = new THREE.Mesh(plane, planeMaterial)
        planeMesh.rotation.x = π/2
        planeMesh.position.y = -2
        planeMesh.receiveShadow = true
        scene.add(planeMesh)

        const cube = new THREE.BoxGeometry(2.5, 2.5, 2.5);
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const cubeMesh = new THREE.Mesh(cube, cubeMaterial);
        cubeMesh.position.y = .5
        cubeMesh.castShadow = true;
        scene.add(cubeMesh);

        renderer.render(scene, camera);

        const animate = () => {
            cubeMesh.rotation.x += 0.05;
            cubeMesh.rotation.y += 0.04;
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Point Lights &amp; Shadows (w/Light Helpers)" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Point01;
