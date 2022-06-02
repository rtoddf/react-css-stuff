import { useEffect } from 'react';
import * as THREE from 'three';
import { createMaterial } from '../utilities/default';
import { createTorusShape } from '../utilities/createShape';
import Description from '../../Description';
import '../default.scss';

function Torus() {
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
        camera.position.z = 125;

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
        const pointLight01 = new THREE.PointLight(0x003264, 1);
        pointLight01.position.set( 300, 0, 200 );
        // pointLight01.position.set( 0, 10, 10);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0x8403a9, 1);
        pointLight02.position.set( -300, 0, 200 );
        // pointLight02.position.set( 0, -10, 0);
        scene.add(pointLight02);

		scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        // create the cone geometry
        const torus = createTorusShape(50, 15, 0xffffff, 50, 100);
        const material = createMaterial();
        const mesh = new THREE.Mesh(torus, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();
    }, [])

    return (
        <>
            <Description title="Torus" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Torus;
