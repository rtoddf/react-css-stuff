import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createTorusShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function TorusShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight, 50, 1, 1000, 0, 0, 225);

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight)

        // create three lights
        scene.add(createLight('point', 0x003264, 2, 2000, 400, 0, 100));
        scene.add(createLight('point', 0x8403a9, 2, 2000, -700, 0, 200));

        // create the cone geometry
        const torus = createTorusShape(50, 20, 0xffffff, 50, 100);
        const material = createMaterial();
        const mesh = new THREE.Mesh(torus, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += 0.03;
            mesh.rotation.y += 0.05;
            mesh.rotation.z += 0.03;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();
    }, [])

    return (
        <>
            <Description title="Torus - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default TorusShape;
