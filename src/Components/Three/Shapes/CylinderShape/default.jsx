import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createCylinderShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function CylinderShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();
        const camera = createCamera(canvasWidth, canvasHeight, 50, 1, 1000, 0, 0, 300);

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight, 0x111111)

        // create three lights
        scene.add(createLight('point', 0xae0000, 2, 2000, 500, 0, 200));
        scene.add(createLight('point', 0xffff00, 2, 2000, -500, 200, 200));

        // create the cone geometry
        const cylinder = createCylinderShape();
        const material = createMaterial();
        const mesh = new THREE.Mesh(cylinder, material)
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
            <Description title="Cylinder" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default CylinderShape;
