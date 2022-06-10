import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { getShapeSettings } from './helpers';
import settings from './settings';
import Grid from '../../../Grid';
import Description from '../../../Description';
import { StlyedGeometry } from '../Geometry.styles';

function Wireframes() {
    const [shape, setShape] = useState('cube');
    const [geom, setGeom] = useState(
        new THREE.BoxGeometry(
            settings[shape].width,
            settings[shape].height,
            settings[shape].depth
        )
    );

    const scene = new THREE.Scene();

    function getShape(e){
        //remove the canvas element before adding another
        // can this be done different???
        const elem = document.querySelector('#shape-holder canvas');
        elem.parentNode.removeChild(elem);

        let geometry = getShapeSettings(e.target.value);
        setGeom(geometry);
    }

    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a camera
        const camera = new THREE.PerspectiveCamera(
            75, // Field of view
            canvasWidth / canvasHeight, // Aspect ratio
            1, // Near
            10000 // Far
        );

        // position the camera so you're not on top of the geometry
        camera.position.z = 40;

        // create a renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(canvasWidth, canvasHeight);
        container.append(renderer.domElement);

        // create the geometry
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            wireframe: true 
        })

        const mesh = new THREE.Mesh(geom, material);
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.y += settings[shape].yRotation;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [geom, scene, shape])

    return (
        <>
            <Description title="Simple Shape Wireframe" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            <select id="shape-select" onChange={(e) => getShape(e)}>
                <option value="cube">Cube</option>
                <option value="capsule">Capsule</option>
                <option value="circle">Circle</option>
                <option value="cone">Cone</option>
                <option value="cylinder">Cylinder</option>
                <option value="dodecahedron">Dodecahedron</option>
                <option value="icosahedron">Icosahedron</option>
                <option value="octahedron">Octahedron</option>
                <option value="plane">Plane</option>
                <option value="ring">Ring</option>
                <option value="sphere">Sphere</option>
                <option value="tetrahedron">Tetrahedron</option>
            </select>
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

export default Wireframes;
