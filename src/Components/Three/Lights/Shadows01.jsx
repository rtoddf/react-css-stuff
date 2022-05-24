import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Description from '../../Common/Description/default';
import '../default.scss';

function Plane02() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            1000
        );
        // position the camera so you're not on top of the geometry
        camera.position.z = 8;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0x9a02fa, 1);
        pointLight01.position.set( 8, 10, 10 );
        pointLight01.castShadow = true;

        const pointLight02 = new THREE.PointLight(0xfa9a02, 1);
        pointLight02.position.set( -8, 10, 10 );
        pointLight02.castShadow = true;

        const spotLight03 = new THREE.SpotLight(0xffffff, .5)
        spotLight03.position.set( 0, 10, 0 );
        spotLight03.angle = Math.PI / 4;
        spotLight03.penumbra = 0.3;
        spotLight03.castShadow = true;
        spotLight03.shadow.focus = 1; // default
        spotLight03.decay = 2;
        spotLight03.distance = 100;

        scene.add(pointLight01, pointLight02, spotLight03);
        // const helper = new THREE.CameraHelper( spotLight03.shadow.camera );
        // scene.add( helper );

		scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02),
            new THREE.SpotLightHelper(spotLight03)
        )

        // create the geometry
        const plane = new THREE.PlaneGeometry(20, 20, 32, 32);
        const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, dithering: true });

        const planeMesh = new THREE.Mesh(plane, planeMaterial);
        planeMesh.receiveShadow = true;
        planeMesh.rotation.x = -(Math.PI/2)
        planeMesh.position.y = -4;
        scene.add(planeMesh);

        // create the sphere01 geometry
        const sphere = new THREE.SphereGeometry( 2, 32, 32 );
        const sphereMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
        });
        const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
        sphereMesh.position.y = 1;
        sphereMesh.position.z = 1;
        sphereMesh.castShadow = true;
        scene.add(sphereMesh);

        const animate = () => {
            // mesh.rotation.x += 0.02;
            // mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Shadows &amp; Light" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Plane02;
