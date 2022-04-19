import { useEffect } from 'react';
import * as THREE from 'three';
import Description from '../../Common/Description/default';
import '../default.scss';

function BoxShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();

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

        // create light1
        const light1 = new THREE.PointLight(0xff7700, 2, 2000);
        light1.castShadow = true;
        light1.position.set(200, 0, 200);
        scene.add(light1);

        // create light2
        const light2 = new THREE.PointLight(0xae0000, 2, 2000);
        light2.castShadow = true;
        light2.position.set(0, 0, 200);
        scene.add(light2);

        // create the box geometry
        const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
        const boxMaterial = new THREE.MeshPhongMaterial({
            color: '0xffffff',
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(boxMesh);

        const animate = () => {
            boxMesh.rotation.x += 0.02;
            boxMesh.rotation.z += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    // create a class for this from the Yourtube example

    return (
        <>
            <Description title="Simple Box - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default BoxShape;
