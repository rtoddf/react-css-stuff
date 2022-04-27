import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../utilities/default';
import { createConeShape } from '../utilities/createShape';
import Description from '../../Common/Description/default';
import '../default.scss';

function CircleShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight);

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight)

        // create three lights
        // type, color, intensity, distance, xpos, ypos, zpos
        scene.add(createLight('point', 0x003264, 2, 2000, 200, 0, 200));
        scene.add(createLight('point', 0x003264, 2, 2000, 100, 200, 100));
        scene.add(createLight('point', 0x003264, 2, 2000, -100, -200, -100));

        // create the cone geometry
        const cone = createConeShape();
        const material = createMaterial('meshLambert', 0x00ff00);
        const mesh = new THREE.Mesh(cone, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += 0.02;
            mesh.rotation.z += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        console.log('typeOf: ', typeof animate)

        animate();
    }, [])

    return (
        <>
            <Description title="Circle - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default CircleShape;
