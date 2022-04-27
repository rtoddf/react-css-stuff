import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createPlaneShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function PlaneShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight, 1000, 1, 5000, 0, 0, 200);

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight)

        // create three lights
        scene.add(createLight('point', 0xffffff, 2, 700, 200, 0, 200));
        scene.add(createLight('point', 0xffffff, 2, 700, 200, 0, -200));

        // create the cone geometry
        const torus = createPlaneShape();
        const material = createMaterial('meshPhong', 0x8d0196);
        const mesh = new THREE.Mesh(torus, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += 0.02;
            mesh.rotation.y += 0.02;
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

export default PlaneShape;
