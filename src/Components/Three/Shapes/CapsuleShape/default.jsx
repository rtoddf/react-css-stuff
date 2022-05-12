import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function CapsuleShape() {
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
        camera.position.z = 15;

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
        const pointLight01 = new THREE.PointLight(0xfa9900, 1.5);
        pointLight01.position.set( 0, 5, 10);
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xffffff, 1);
        pointLight02.position.set( 0, -10, 0);
        scene.add(pointLight02);

        var lightHelper1 = new THREE.PointLightHelper(pointLight01)
        var lightHelper2 = new THREE.PointLightHelper(pointLight02)
		scene.add(lightHelper1, lightHelper2)

        // create the box geometry
        const geometry = new THREE.CapsuleGeometry( 4, 6, 100, 50 );
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            // wireframe: true
            // map: new THREE.TextureLoader().load('./images/globe.jpeg'),
        });

        const mesh = new THREE.Mesh( geometry, material );
        scene.add(mesh);

        const animate = () => {
            renderer.render(scene, camera);
            mesh.rotation.x += 0.03;
            // mesh.rotation.z += 0.03;
            controls.update();
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Capsule" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default CapsuleShape;
