import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from './Geometry.styles';

function Sphere() {
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
        camera.position.z = 25;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0x003264, 3);
        pointLight01.position.set( -10, 20, 15);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( -20, -20, 15);
        scene.add(pointLight02);

        scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        // create the sphere01 geometry
        const sphere01 = new THREE.SphereGeometry( 10, 32, 32 );
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
        });
        const mesh01 = new THREE.Mesh(sphere01, material)
        scene.add(mesh01);

        // create the sphere02 geometry
        const sphere02 = new THREE.SphereGeometry( 2.15, 32, 23 );
        const mesh02 = new THREE.Mesh(sphere02, material);
        // create a center point for sphere01 to rotate around - invisble object
        const sphere02CenterPoint = new THREE.Object3D();
        // add the invisible object to the scene
        scene.add(sphere02CenterPoint);
        // add the sphere01 to the invisibel object
        sphere02CenterPoint.add(mesh02);
        mesh02.position.x = 20;

        // create the sphere03 geometry
        const sphere03 = new THREE.SphereGeometry( 1.25, 32, 32 );
        const mesh03 = new THREE.Mesh(sphere03, material);
        // create a center point for sphere01 to rotate around - invisble object
        const sphere03CenterPoint = new THREE.Object3D();
        // add the invisible object to the scene
        scene.add(sphere03CenterPoint);
        // add the sphere01 to the invisibel object
        sphere03CenterPoint.add(mesh03);
        mesh03.position.x = -15;

        const animate = () => {
            // mesh01.rotation.y += 0.025;
            sphere02CenterPoint.rotateY(0.008);
            sphere02CenterPoint.rotateZ(0.008);

            sphere03CenterPoint.rotateY(0.01);
            sphere03CenterPoint.rotateZ(0.01);

            // mesh01.rotateY(0.025);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Spheres" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Sphere;
