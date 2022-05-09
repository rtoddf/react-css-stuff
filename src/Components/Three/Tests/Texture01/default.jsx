import { useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import { MeshBasicMaterial } from 'three';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Texture01() {
    useEffect(() => {
        // create a scene
        const scene = new THREE.Scene();

        const canvas = document.querySelector('#bg');
        const canvasWidth = document.querySelector('#shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        // the sphere has a radius of 5
        // if we don't set the camera's z position, then we're inside the sphere
        // MeshBasicMaterial doesn't color the inside, so we don't see if
        // we have to set the z position to more than the radius of the sphere - thus 10
        const camera = new THREE.PerspectiveCamera(75, canvasWidth/canvasHeight, 0.1, 1000);
        camera.position.z = 10;
        
        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader,
                // fragmentShader: 
            })
        //     new THREE.MeshBasicMaterial({
        //         // color: 0xbaba71,
        //         map: new THREE.TextureLoader().load('/images/threejs/textures/globe.jpeg')
        //     })
        );

        scene.add(sphere);

        // add animate
        function animate(){
            window.requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }, [])

    return (
        <>
            <Description title="Texture One One" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <div className="grid">
                <div id="shape-holder" className="half">
                    <canvas id="bg"></canvas>
                </div>
            </div>
        </>
    )
}

export default Texture01;
