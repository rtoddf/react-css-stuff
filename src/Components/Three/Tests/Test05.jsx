import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';

function Test05() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        const camera = new THREE.PerspectiveCamera(
            75, // field of view
            canvasWidth / canvasHeight, // aspect ratio
            0.1, // near
            1000 // far
        );
        camera.position.x = 12
        camera.position.y = 12
        camera.position.z = 25

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

        const light1 = new THREE.PointLight(0xffffff, 2);
        light1.position.set(0, 10, 0);
        scene.add(light1);

        scene.add(
            new THREE.PointLightHelper(light1),
            // new THREE.PointLightHelper(light2)
        )

        const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
        const boxMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(boxMesh);

        // plane
        const planeGeometry = new THREE.PlaneGeometry(40, 40);
        const planeMaterial = new THREE.MeshPhongMaterial({
            color: 'rgba(120,120,120,1)',
		    side: THREE.DoubleSide
        });
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        scene.add(planeMesh);
        planeMesh.position.y = -5;
        planeMesh.rotation.x = Math.PI/2

        const animate = () => {
            // sphereMesh.rotation.x += 0.03;
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Test Three - Simple Parent Child" />
            <Grid>
                <div id="shape-holder"></div>
            </Grid>
        </>
    )
}

export default Test05;
