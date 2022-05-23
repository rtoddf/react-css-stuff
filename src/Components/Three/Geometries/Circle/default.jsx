import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createMaterial } from '../../utilities/default';
import { createCircleShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

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
        camera.position.z = 100;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0x009900, 1);
        pointLight01.position.set( 70, 0, 50 );
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( -70, 0, 50 );
        scene.add(pointLight02);

        const pointLight03 = new THREE.PointLight(0xff0000, 1);
        pointLight03.position.set( 70, 0, -50 );
        scene.add(pointLight03);

        const pointLight04 = new THREE.PointLight(0x0000ff, 1);
        pointLight04.position.set( -70, 0, -50 );
        scene.add(pointLight04);

        const lightHelper1 = new THREE.PointLightHelper(pointLight01)
        const lightHelper2 = new THREE.PointLightHelper(pointLight02)
        const lightHelper3 = new THREE.PointLightHelper(pointLight03)
        const lightHelper4 = new THREE.PointLightHelper(pointLight04)
		scene.add(lightHelper1, lightHelper2, lightHelper3, lightHelper4)

        // create the cone geometry
        const circle = createCircleShape(50, 50, 0xffffff, 0, 6.3);
        const material = createMaterial('meshPhong', 0xffffff);
        const mesh = new THREE.Mesh(circle, material)
        scene.add(mesh);

        const animate = () => {
            // mesh.rotation.x += 0.02;
            mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Circle" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Circle;
