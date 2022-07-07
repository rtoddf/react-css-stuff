import { useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';

function Test05() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;
        const gui = new GUI();

        const camera = new THREE.PerspectiveCamera(
            75, // field of view
            canvasWidth / canvasHeight, // aspect ratio
            0.1, // near
            1000 // far
        );
        camera.position.set(12, 12, 25);

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor('rgba(180,180,180,1)');
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        const light1 = new THREE.SpotLight(0xffffff, 2);
        light1.position.set(0, 9, 0);
        light1.penumbra = .5
        light1.castShadow = true;
        scene.add(light1);

        // sphere/lightsource
        const bulbGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const bulbMaterial = new THREE.MeshBasicMaterial({
            color: 'rgba(255,255,255,1)'
        });
        const bulbMesh = new THREE.Mesh(bulbGeometry, bulbMaterial);
        light1.add(bulbMesh);

        // box
        const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
        const boxMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.castShadow = true;
        scene.add(boxMesh);

        // plane
        const planeGeometry = new THREE.PlaneGeometry(80, 80);
        const planeMaterial = new THREE.MeshPhongMaterial({
            color: 'rgba(120,120,120,1)',
		    side: THREE.DoubleSide
        });
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.position.y = -5;
        planeMesh.rotation.x = Math.PI/2
        planeMesh.receiveShadow = true;
        scene.add(planeMesh);

        // gui
        // gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate x axis');
        gui.add(light1.position, 'y', 6, 18).name('Y light position');
        gui.add(light1, 'intensity', 0, 10);

        const animate = () => {
            // sphereMesh.rotation.x += 0.03;
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Test Five - Lighting Test w/ One Object" />
            <Grid>
                <div id="shape-holder"></div>
            </Grid>
        </>
    )
}

export default Test05;
