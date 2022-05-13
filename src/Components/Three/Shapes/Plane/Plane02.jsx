import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createPlaneShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Plane02() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const canvas = document.querySelector('#bg');
        const canvasWidth = document.querySelector('#shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(60, canvasWidth/canvasHeight, 0.1, 1000);

        // position the camera so you're not on top of the geometry
        camera.position.setZ(50);

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);

        // create lights


        // create the geometry
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
            <Description title="Plane - Test" copy="" />
            <div className="grid">
                <div id="shape-holder">
                    <canvas id="bg"></canvas>
                </div>
            </div>
        </>
    )
}

export default Plane02;
