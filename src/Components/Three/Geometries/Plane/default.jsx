import { useEffect } from 'react';
import * as THREE from 'three';
import { createMaterial } from '../../utilities/default';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Plane() {
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
        camera.position.z = 25;

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
        const pointLight01 = new THREE.PointLight(0x8d0196, 1);
        pointLight01.position.set( 200, 0, 200 );
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xffffff, 1);
        pointLight02.position.set( -200, 0, 200 );
        scene.add(pointLight02);

		scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        // create the cone geometry
        const plane = new THREE.PlaneGeometry(20, 20, 32, 32);
        const material = createMaterial('meshPhong', 0xffffff);
        const mesh = new THREE.Mesh(plane, material)
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

export default Plane;
