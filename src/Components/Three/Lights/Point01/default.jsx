import { useEffect } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, createLight, createMaterial } from '../../utilities/default';
import { createPlaneShape, createBoxShape } from '../../utilities/createShape';
import Description from '../../../Common/Description/default';
import '../../default.scss';

function Point01() {
    useEffect(() => {
        const container = document.getElementById('shape-holder');
        const canvasWidth = document.getElementById('shape-holder').offsetWidth;
        const canvasHeight = canvasWidth * 0.5;

        // create a scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 35, canvasWidth/canvasHeight, 0.1, 3000 );

        // create a renderer
        const renderer = createRenderer(container, canvasWidth, canvasHeight, 0x333333)

        // create three lights
        scene.add(createLight('ambient', 0xffffff, .5 ));
        scene.add(createLight('point', 0xffffff, 2, 0, 200, 0, -200));

        const π = Math.PI;

        // create the cone geometry
        var plane = createPlaneShape( 1000, 1000, 100, 100 );
        var planeMaterial = createMaterial('meshPhong', 0xffffff);
        var planeMesh = new THREE.Mesh(plane, planeMaterial)
        planeMesh.rotation.x = -90 * π/180
        planeMesh.position.y = -100
        planeMesh.position.z = -800
        scene.add(planeMesh)

        const cube = createBoxShape();
        const material = createMaterial('meshPhong', 0xffffff);
        const mesh = new THREE.Mesh(cube, material);
        mesh.position.z = -500;
        mesh.position.x = -100;
        scene.add(mesh);

        renderer.render(scene, camera);

        const animate = () => {

        };
        animate();
    }, [])

    return (
        <>
            <Description title="Plane - Shiny Material" copy="" />
            <div className="grid">
                <div id="shape-holder"></div>
            </div>
        </>
    )
}

export default Point01;
