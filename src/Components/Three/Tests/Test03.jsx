import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';

import paperTextureImage from '../images/white-paper.jpg';

function Test03() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        const camera = new THREE.PerspectiveCamera(
            75, // field of view
            canvasWidth / canvasHeight, // aspect ratio
            0.1, // near
            1000 // far
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

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        const light1 = new THREE.PointLight(0xffffff, 1);
        light1.position.set(16, 0, 16);
        scene.add(light1);

        const light2 = new THREE.PointLight(0xfab703, 1);
        light2.position.set(-16, 0, 16);
        scene.add(light2);

        scene.add(
            new THREE.PointLightHelper(light1),
            new THREE.PointLightHelper(light2)
        )

        const sphereGeometry = new THREE.SphereGeometry(10, 100, 100);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(paperTextureImage)
        });
        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphereMesh);

        /////////////////
        const spike01Geometry = new THREE.CylinderGeometry(4, 4, 20, 32);
        const spike02Geometry = new THREE.CylinderGeometry(4, 4, 20, 32);
        const spike03Geometry = new THREE.CylinderGeometry(4, 4, 20, 32);

        /////////////////
        const spike01Material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(paperTextureImage)
        });
        const spike02Material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(paperTextureImage)
        });
        const spike03Material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(paperTextureImage)
        });

        /////////////////
        const spike01Mesh = new THREE.Mesh(spike01Geometry, spike01Material);
        const spike02Mesh = new THREE.Mesh(spike02Geometry, spike02Material);
        const spike03Mesh = new THREE.Mesh(spike03Geometry, spike03Material);

        /////////////////
        spike01Mesh.rotation.z = Math.PI / 1.5;
        spike02Mesh.rotation.z = Math.PI / 3;
        /////////////////

        sphereMesh.add(spike01Mesh, spike02Mesh, spike03Mesh);

        const animate = () => {
            sphereMesh.rotation.x += 0.03;
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Test Three - Simple Parent Child" />
            <Grid>
                <div id="shape-holder"></div>
            </Grid>
        </>
    )
}

export default Test03;
