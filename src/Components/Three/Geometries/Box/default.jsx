import { useEffect } from 'react';
import * as THREE from 'three';
import { createLight, createMaterial } from '../../utilities/default';
import { createBoxShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Box() {
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
        camera.position.z = 175;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        // create two lights
        // type, color, intensity, distance, xpos, ypos, zpos
        scene.add(createLight('point', 0xff7700, 2, 2000, 200, 0, 200));
        scene.add(createLight('point', 0xae0000, 2, 2000, 200, 0, -200));

        // create the box geometry
        const box = createBoxShape(100, 100, 100);
        const material = createMaterial();
        const mesh = new THREE.Mesh(box, material)
        scene.add(mesh);

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
            <Description title="Box" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Box;
