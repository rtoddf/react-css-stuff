import { useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';

function Test06() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;
        const gui = new GUI();

        const camera = new THREE.PerspectiveCamera(
            75, // field of view
            canvasWidth / canvasHeight, // aspect ratio
            0.1, // near
            1000 // far
        );
        camera.position.set(6, 4, 8);

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setClearColor('rgba(180,180,180,1)');
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;
        container.append(renderer.domElement);

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = true;

        const light1 = new THREE.SpotLight(0xfaad49, 1);
        light1.position.set(0, 20, 0);
        light1.penumbra = .5
        light1.castShadow = true;
        scene.add(light1);

        // sphere/lightsource
        const bulbGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const bulbMaterial = new THREE.MeshBasicMaterial({
            color: 0xfaad49
        });
        const bulbMesh = new THREE.Mesh(bulbGeometry, bulbMaterial);
        light1.add(bulbMesh);

        // boxes
        const boxes = getBoxGrid(10, 1.5)
        scene.add(boxes);

        // plane
        const planeGeometry = new THREE.PlaneGeometry(80, 80);
        const planeMaterial = new THREE.MeshPhongMaterial({
            color: 'rgba(120,120,120,1)',
		    side: THREE.DoubleSide
        });
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.position.y = 0;
        planeMesh.rotation.x = Math.PI/2
        planeMesh.receiveShadow = true;
        scene.add(planeMesh);

        // gui
        gui.add(light1.position, 'x', -20, 20).name('X light position');
        gui.add(light1.position, 'y', 3, 20).name('Y light position');
        gui.add(light1.position, 'z', -20, 20).name('Z light position');
        gui.add(light1, 'intensity', 0, 10);
        gui.add(light1, 'penumbra', 0, 1);

        const animate = () => {
            // const boxGrid = scene.getObjectByName('boxes');
            const timeElapsed = new THREE.Clock().getElapsedTime();
            // boxes.children.forEach(function(child, i){
            //     child.scale.y = (Math.sin(timeElapsed * 5 + i) + 1)/2 + 0.001
            //     child.position.y = child.scale.y/2
            // })
            
            
            console.log('boxes: ', boxes);

            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();
    }, [])

    const makeBox = (i, separationMultiplier) => {
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.castShadow = true;

        boxMesh.position.x = i * separationMultiplier;
        boxMesh.position.y = boxMesh.geometry.parameters.height/2;

        return boxMesh;
    }

    const getBoxGrid = (amount, separationMultiplier) => {
        const group = new THREE.Group();

        for(var i=0; i<amount; i++){
            const boxMesh = makeBox(i, separationMultiplier);
            group.add(boxMesh);

            for(var j=1;j<amount;j++){
                const boxMesh = makeBox(i, separationMultiplier);
                boxMesh.position.z = j * separationMultiplier
                group.add(boxMesh);
            }            
        }

        group.position.x = -(separationMultiplier * (amount-1))/2
	    group.position.z = -(separationMultiplier * (amount-1))/2

        return group;
    }

    return (
        <>
            <Description title="Test Six - Lighting Test w/Multiple Objects - Moving" />
            <Grid>
                <div id="shape-holder"></div>
            </Grid>
        </>
    )
}

export default Test06;
