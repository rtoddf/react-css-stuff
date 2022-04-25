import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCamera } from '../utilities/createCamera';
import { createLight } from '../utilities/createLight';
import Description from '../../Common/Description/default';
import '../default.scss';

function CircleShape() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.7;

        // create a scene
        const scene = new THREE.Scene();

        
        const camera = createCamera(canvasWidth, canvasHeight);
        

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        var orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableZoom = false;

        // create light1
        const light1 = createLight();
        light1.position.set(200, 0, 200);
        scene.add(light1);

        // create light2
        const light2 = createLight();
        light2.position.set(100, 200, 100);
        scene.add(light2);

        // create light3
        const light3 = createLight();
        light3.position.set(-100, -200, -100);
        scene.add(light3);

        // create the cone geometry
        const coneGeometry = new THREE.ConeGeometry(150, 350, 50, 50, false);
        const coneMaterial = new THREE.MeshLambertMaterial({
            color: 0x003264,
        });
        const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
        scene.add(coneMesh);

        const animate = () => {
            coneMesh.rotation.x += 0.02;
            coneMesh.rotation.z += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Circle - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default CircleShape;
