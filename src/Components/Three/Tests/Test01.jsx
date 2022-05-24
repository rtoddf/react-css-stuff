import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import Description from '../../Common/Description/default';
import '../default.scss';

function Test01() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // console.log('canvasWidth:', canvasWidth);
        // console.log('canvasHeight:', canvasHeight);

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            1000, // field of view
            canvasWidth / canvasHeight, // aspect ratio
            1, // near
            5000 // far
        );
        // position the camera so you're not on top of the geometry
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 200;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        scene.add(spotLight);

        const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
        const boxMaterial = new THREE.MeshNormalMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(boxMesh);

        // add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // add FPS stats
        const stats = Stats();
        // document.body.appendChild(stats.dom);

        const animate = () => {
            boxMesh.rotation.x += 0.01;
            boxMesh.rotation.y += 0.01;
            // stats.update();
            // controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [])

    // create a class for this from the Yourtube example

    return (
        <>
            <Description title="Test One - Box Geometry" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Test01;
