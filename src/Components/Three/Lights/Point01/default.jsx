import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createPlaneShape, createBoxShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Point01() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth/2;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            1000,
            canvasWidth/canvasHeight,
            1,
            5000 );
        camera.position.z = -30;

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight, 0x333333)
        renderer.shadowMap.enabled = true

        // create three lights
        const light1 = createLight('point', 0xfca102, 3, 0, 300, 0, 100)
        light1.castShadow = true
        // light1.shadow.bias = 0.001
        // light1.penumbra = .5
        scene.add(light1)

        const light2 = createLight('point', 0xfca102, 3, 0, -300, 0, 100)
        light2.castShadow = true
        // light2.shadow.bias = 0.001
        // light2.penumbra = .5
        scene.add(light2)

        var lightHelper1 = new THREE.PointLightHelper(light1)
		scene.add(lightHelper1)
		var lightHelper2 = new THREE.PointLightHelper(light2)
		scene.add(lightHelper2)

        const π = Math.PI;

        // create the cone geometry
        var plane = createPlaneShape(1000, 2000);
        var planeMaterial= new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
    
        var planeMesh = new THREE.Mesh(plane, planeMaterial)
        planeMesh.rotation.x = π/2
        planeMesh.position.y = 100
        planeMesh.receiveShadow = true
        scene.add(planeMesh)

        const cube = createBoxShape(100, 100, 100);
        const material = createMaterial('meshStandard', 0xb16f2e);
        const mesh = new THREE.Mesh(cube, material);
        mesh.position.z = -200;
        mesh.castShadow = true;
        scene.add(mesh);

        renderer.render(scene, camera);

        const animate = () => {
            mesh.rotation.x += 0.02;
            mesh.rotation.z += 0.02;
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
