import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createPlaneShape, createBoxShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Point01() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a scene
        const scene = new THREE.Scene(canvasWidth/canvasHeight);
        const camera = createCamera(canvasWidth, canvasHeight, 1000, 1, 5000, 0, 0, 30)

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight, 0x333333)
        renderer.shadowMap.enabled = true;

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = false;

        // create three lights
        const light1 = createLight('point', 0xae0000, 2, 0, 300, -200, 50)
        light1.castShadow = true
        scene.add(light1)

        const light2 = createLight('point', 0xfca102, 2, 0, -300, -200, 50)
        light2.castShadow = true
        scene.add(light2)

        const lightHelper1 = new THREE.PointLightHelper(light1)
		scene.add(lightHelper1)
		const lightHelper2 = new THREE.PointLightHelper(light2)
		scene.add(lightHelper2)

        const π = Math.PI;

        // create the cone geometry
        const plane = createPlaneShape(1000, 2000);
        const planeMaterial= new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
    
        const planeMesh = new THREE.Mesh(plane, planeMaterial)
        planeMesh.rotation.x = π/2
        planeMesh.position.y = 100
        planeMesh.receiveShadow = true
        scene.add(planeMesh)

        const cube = createBoxShape(100, 100, 100);
        const material = createMaterial('meshStandard', 0xffffff);
        const mesh = new THREE.Mesh(cube, material);
        mesh.position.z = -200;
        mesh.castShadow = true;
        scene.add(mesh);

        renderer.render(scene, camera);

        const animate = () => {
            // mesh.rotation.x += 0.05;
            mesh.rotation.y += 0.05;
            // mesh.rotation.z += 0.05;
            controls.update();
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

export default Point01;
