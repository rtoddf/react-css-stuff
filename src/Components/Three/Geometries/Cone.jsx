import { useEffect } from 'react';
import * as THREE from 'three';
import { createMaterial } from '../utilities/default';
import { createConeShape } from '../utilities/createShape';
import Description from '../../Description';
import '../default.scss';

function Circle() {
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
        camera.position.z = 500;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        // create lights
        const pointLight01 = new THREE.PointLight(0xffffff, 1);
        pointLight01.position.set( 0, 300, 300);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( 0, -300, 0);
        scene.add(pointLight02);

        // create the cone geometry
        const cone = createConeShape();
        const material = createMaterial('meshLambert', 0x00ff00);
        const mesh = new THREE.Mesh(cone, material)
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
            <Description title="Cone" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Circle;
