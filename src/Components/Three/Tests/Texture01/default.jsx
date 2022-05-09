import { useEffect } from 'react';
import * as THREE from 'three';
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
        const camera = new THREE.PerspectiveCamera(75, canvasWidth/canvasHeight, 0.1, 1000);
        
        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);

        // add FPS stats

        // add animate
        function animate(){
            window.requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }, [])

    return (
        <>
            <Description title="Texture One" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <div className="grid">
                <div id="shape-holder" className="half">
                    <canvas id="bg"></canvas>
                </div>
            </div>
        </>
    )
}

export default Texture01;
