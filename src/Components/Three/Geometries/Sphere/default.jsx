import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createCircleShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Sphere() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight, 1000, 1, 5000, 0, 0, 200);

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight)

        // create two lights
        scene.add(createLight('point', 0xffff00, 3, 700, 200, 0, 200));
        scene.add(createLight('point', 0xffffff, 3, 700, 200, 0, -200));

        // create the cone geometry
        const circle = createCircleShape(100, 100, 0x002200, 0, 6.3);
        const material = createMaterial('meshPhong', 0x002200);
        const mesh = new THREE.Mesh(circle, material)
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
            <Description title="Sphere" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Sphere;
