import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from './Geometry.styles';

function SphereDivision() {
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
        camera.position.y = -5;
        camera.position.z = 15;

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
        pointLight01.position.set( 0, 20, 15);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( 0, 0, 0);
        scene.add(pointLight02);

        scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        // create the sphere01 geometry
        const sphere = new THREE.SphereGeometry( 10, 10, 10, 0, 6.3, 0, 1.5 );
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
		    shading: THREE.FlatShading
        });
        const sphereMesh = new THREE.Mesh(sphere, material)
        sphereMesh.rotation.x = Math.PI * -.1;
        sphereMesh.position.y = -5;
        scene.add(sphereMesh);

        const animate = () => {
            sphereMesh.rotation.y += 0.025;
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

export default SphereDivision;
