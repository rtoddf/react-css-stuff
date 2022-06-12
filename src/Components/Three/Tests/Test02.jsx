import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Description from '../../Description';
import '../default.scss';

function Test02() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const canvas = document.querySelector('#bg');
        const canvasWidth = document.querySelector('#shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(60, canvasWidth/canvasHeight, 0.1, 1000);

        // position the camera so you're not on top of the geometry
        camera.position.setZ(50);
        
        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);

        // create lights
        const pointLight = new THREE.PointLight(0xffffff);
        // pointLight.position.set(5,5,5);
        pointLight.position.set(0,10,10);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight);

        // create geometry
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

        // create material
        // MeshBasicMaterial does not need a light source. Others do
        const material = new THREE.MeshStandardMaterial({
            color: 0xff6347,
            // wireframe: true,
        });
        // create mesh
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        // add Helpers
        const lightHelper = new THREE.PointLightHelper(pointLight, 1);
        const gridHelper = new THREE.GridHelper(100, 50);

		scene.add(lightHelper, gridHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        // add FPS stats

        // add animate
        function animate(){
            window.requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            // torus.rotation.y += 0.01;
            // torus.rotation.z += 0.01;

            controls.update();

            // render == DRAW
            renderer.render(scene, camera);
        }
        animate();
    }, [])

    return (
        <>
            <Description title="Test Two - Geometry &amp; Lighting" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <div className="grid">
                <div id="shape-holder" className="half">
                    <canvas id="bg"></canvas>
                </div>
            </div>
        </>
    )
}

export default Test02;
