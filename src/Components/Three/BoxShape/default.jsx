import { useEffect } from 'react';
import * as THREE from 'three';
import { createCamera } from '../utilities/createCamera';
import { createLight } from '../utilities/createLight';
import { createBoxShape } from '../utilities/createShape';

import Description from '../../Common/Description/default';
import '../default.scss';

function BoxShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();

        // create a camera
        const camera = createCamera(canvasWidth, canvasHeight, 1000, 1, 5000, 0, 0, 200);

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        // create two lights
        // type, color, intensity, distance, xpos, ypos, zpos
        scene.add(createLight('point', 0xff7700, 2, 2000, 200, 0, 200));
        scene.add(createLight('point', 0xae0000, 2, 2000, 200, 0, -200));

        // create the box geometry
        const box = createBoxShape(100, 100, 100);
        scene.add(box);

        const animate = () => {
            box.rotation.x += 0.02;
            box.rotation.z += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Simple Box - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default BoxShape;
