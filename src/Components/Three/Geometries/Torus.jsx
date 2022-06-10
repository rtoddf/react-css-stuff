import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from './Geometry.styles';

function Torus() {
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
        camera.position.z = 20;

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
        const pointLight01 = new THREE.PointLight(0x003264, 2);
        pointLight01.position.set( 10, 10, 10 );
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0x8403a9, 1);
        pointLight02.position.set( -10, -10, 10 );
        scene.add(pointLight02);

		scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        const geometry = new THREE.TorusGeometry(8, 2, 50, 50);
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
        });
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();
    }, [])

    return (
        <>
            <Description title="Torus" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Torus;
