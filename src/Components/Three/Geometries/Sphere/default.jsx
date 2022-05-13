import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createCircleShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Sphere() {
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
        camera.position.z = 30;

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
        const pointLight01 = new THREE.PointLight(0x003264, 2);
        pointLight01.position.set( 0, 20, 15);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( 0, -20, 15);
        scene.add(pointLight02);

        const lightHelper1 = new THREE.PointLightHelper(pointLight01)
        const lightHelper2 = new THREE.PointLightHelper(pointLight02)
		scene.add(lightHelper1, lightHelper2)

        // create the cone geometry
        const sphere = new THREE.SphereGeometry( 15, 32, 32 );
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            // wireframe: true
        });
        const mesh = new THREE.Mesh(sphere, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.z += 0.02;
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
