import { useEffect } from 'react';
import * as THREE from 'three';
import { createCylinderShape } from '../utilities/createShape';
import { createCamera } from '../utilities/createCamera';
import { createLight } from '../utilities/createLight';
import Description from '../../Common/Description/default';
import '../default.scss';

function CylinderShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight, 50, 1, 1000, 0, 0, 300);

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        // create three lights
        scene.add(createLight('point', 0xae0000, 2, 2000, 500, 0, 200));
        scene.add(createLight('point', 0xffff00, 2, 2000, -500, 200, 200));

        // create the cone geometry
        const geometry = createCylinderShape();
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += 0.03;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

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

export default CylinderShape;
