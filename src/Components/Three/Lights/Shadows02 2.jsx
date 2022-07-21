import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from '../Geometries/Geometry.styles';

function Shadows02() {
    useEffect(() => {
        const π = Math.PI;
        // create a scene
        const scene = new THREE.Scene();

        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(60, canvasWidth/canvasHeight, 0.1, 1000);

        // position the camera so you're not on top of the geometry
        // the box is 10px
        // if we put the camera at 10, we'll be in the center of the box
        // so we set it to 15
        camera.position.y = 3;
        camera.position.z = 15;
        
        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;
        container.append(renderer.domElement);
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // create lights
        // PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
        const pointLight = new THREE.PointLight(0x003264, 5);
        // pointLight.position.set(5,5,5);
        pointLight.position.set(0,10,10);
        pointLight.castShadow = true;
        // scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0x003264);
        scene.add(ambientLight);

        // SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )
        const spotLight = new THREE.SpotLight( 0x003264, 5, 0, π/3, 0.05 );
        spotLight.position.set(0,10,10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        scene.add(
            new THREE.PointLightHelper(pointLight),
            // new THREE.PointLightHelper(pointLight02),
            new THREE.SpotLightHelper(spotLight)
        )

        // create geometry
        const geometry = new THREE.PlaneGeometry(80, 80, 32, 32);
        const geometry02 = new THREE.BoxGeometry(5, 5, 5);

        // create material
        // MeshBasicMaterial does not need a light source. Others do
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const material02 = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });

        // create mesh
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x += -1.5;
        // move it down so we can see it
        plane.position.set(0, -10, 0);
        plane.receiveShadow = true;

        const box = new THREE.Mesh(geometry02, material02);
        box.position.set(0, 3, 3);
        box.rotation.x = 2;
        box.castShadow = true;

        scene.add(plane, box);

        // add Helpers
        const lightHelper = new THREE.PointLightHelper(pointLight, 1);
        const gridHelper = new THREE.GridHelper(100, 50);

		scene.add(lightHelper, gridHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        // add animate
        function animate(){
            window.requestAnimationFrame(animate);

            // plane.rotation.x += 0.01;
            // plane.rotation.y += 0.01;
            box.rotation.z += 0.05;
            // box.position.z += 0.05;

            controls.update();

            // render == DRAW
            renderer.render(scene, camera);
        }
        animate();
    }, [])

    return (
        <>
            <Description title="Test Three - Ligting &amp; Shadow" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Shadows02;
