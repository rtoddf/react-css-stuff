import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createMaterial } from '../utilities/default';
import { createCylinderShape } from '../utilities/createShape';
import Description from '../../Common/Description/default';
import '../default.scss';

function Cylinder() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a scene
        const scene = new THREE.Scene();

        // const camera = createCamera(canvasWidth, canvasHeight, 50, 1, 1000, 0, 0, 300);

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            10000
        );
        camera.position.z = 150;

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
        const pointLight01 = new THREE.PointLight(0xae0000, 1);
        pointLight01.position.set( 100, 0, 100 );
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xfa9900, 1);
        pointLight02.position.set( -100, 0, 100 );
        scene.add(pointLight02);

        const pointLight03 = new THREE.PointLight(0x999900, 1);
        pointLight03.position.set( 0, 100, 100 );
        scene.add(pointLight03);

		scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02),
            new THREE.PointLightHelper(pointLight03)
        )

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

export default Cylinder;
