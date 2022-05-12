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

        // create lights
        const light = new THREE.PointLight('point', 0xff0000, 2, 0);
        light.position.set(0,10,10);
        scene.add(light);

        var lightHelper1 = new THREE.PointLightHelper(light)
		scene.add(lightHelper1)

        // create the box geometry
        const geometry = new THREE.Mesh(
            new THREE.CapsuleGeometry( 4, 8, 16, 16 ),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                // wireframe: true
                // map: new THREE.TextureLoader().load('./images/globe.jpeg'),
            })
        );
        scene.add(geometry);

        const animate = () => {
            renderer.render(scene, camera);
            geometry.rotation.x += 0.01;
            geometry.rotation.y += 0.01;
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
