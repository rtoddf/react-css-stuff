import { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Grid from '../../Grid';
import Description from '../../Description';
import { StlyedGeometry } from './Geometry.styles';

function Box({ lightColor1, lightColor2, xRotationSpeed, yRotationSpeed, zRotationSpeed}) {
    const convertToHex = (str) => {
        return parseInt(str.replace(/^#/, ''), 16);
    }

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
        camera.position.z = 15;

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
        const pointLight01 = new THREE.PointLight(convertToHex(lightColor1), 2);
        pointLight01.position.set( 10, 0, 10 );
        scene.add(pointLight01);

        const pointLight02 = new THREE.PointLight(convertToHex(lightColor2), 2);
        pointLight02.position.set( -10, 0, 10 );
        scene.add(pointLight02);

        scene.add(
            new THREE.PointLightHelper(pointLight01),
            new THREE.PointLightHelper(pointLight02)
        )

        // create the box geometry
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            // wireframe: true
        });
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh);

        const animate = () => {
            mesh.rotation.x += xRotationSpeed;
            mesh.rotation.y += yRotationSpeed;
            mesh.rotation.z += zRotationSpeed;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, [])

    return (
        <>
            <Description title="Box" copy="" />
            <Grid>
                <StlyedGeometry id="shape-holder" />
            </Grid>
        </>
    )
}

Box.propTypes = {
    lightColor1: PropTypes.string,
    lightColor2: PropTypes.string,
    xRotationSpeed: PropTypes.number,
    yRotationSpeed: PropTypes.number,
    zRotationSpeed: PropTypes.number
}

Box.defaultProps = {
    lightColor1: '#ff7700',
    lightColor2: '#baba71',
    xRotationSpeed: 0.02,
    yRotationSpeed: 0,
    zRotationSpeed: 0.02,
};

export default Box;
