import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from '../Geometries/Geometry.styles';

import cylinderTextureImage from '../images/checkerboard.jpg';
import planeTextureImage from '../images/concrete.jpg';

function Texture02() {
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
        camera.position.z = 20;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        // create lights
        const pointLight01 = new THREE.PointLight(0xffffff, 1);
        pointLight01.position.set( 10, 6, 6 );
        pointLight01.castShadow = true;
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(0xae0000, 1);
        pointLight02.position.set( -10, 5, 6 );
        pointLight02.castShadow = true;
        scene.add(pointLight02);

        scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        const planeTexture = new THREE.TextureLoader().load(planeTextureImage);
        planeTexture.wrapS = THREE.RepeatWrapping;
        planeTexture.wrapT = THREE.RepeatWrapping;

        const plane = new THREE.PlaneGeometry(80, 80, 32, 32);
        const planeMaterial = new THREE.MeshStandardMaterial({
            map: planeTexture
        });
        const planeMesh = new THREE.Mesh(plane, planeMaterial);
        planeMesh.rotation.x += -1.5;
        // move it down so we can see it
        planeMesh.position.set(0, -20, 0);
        planeMesh.receiveShadow = true;
        scene.add(planeMesh)

        const cylinderTexture = new THREE.TextureLoader().load(cylinderTextureImage);
        cylinderTexture.wrapS = THREE.RepeatWrapping;
        cylinderTexture.wrapT = THREE.RepeatWrapping;

        // create the cylinder geometry
        const cylinder = new THREE.CylinderGeometry(3, 3, 15, 100, 100);
        const cylinderMaterial = new THREE.MeshStandardMaterial({
            map: cylinderTexture
        });
        const cylinderMesh = new THREE.Mesh(cylinder, cylinderMaterial);
        cylinderMesh.castShadow = true;
        scene.add(cylinderMesh);

        const shape1 = new THREE.CylinderGeometry(4, 4, 2, 100, 100);
        const shape1Material = new THREE.MeshStandardMaterial({
            color: 0xffffff
        });
        const shape1Mesh = new THREE.Mesh(shape1, shape1Material);
        shape1Mesh.position.y = 5.5;

        const shape2 = new THREE.CylinderGeometry(4, 4, 2, 100, 100);
        const shape2Material = new THREE.MeshStandardMaterial({
            color: 0xffffff
        });
        const shape2Mesh = new THREE.Mesh(shape2, shape2Material);
        shape2Mesh.position.y = -5.5

        const group = new THREE.Group();
        group.add(cylinderMesh, shape1Mesh, shape2Mesh)
        group.castShadow = true
	    scene.add(group)

        const animate = () => {
            cylinderMesh.rotation.y += 0.03;
            // group.rotation.y += 0.03;
            group.rotation.z += 0.03;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Texture Two" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Texture02;
