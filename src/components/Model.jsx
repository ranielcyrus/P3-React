import React from 'react';
import { useLoader, useFrame} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';

const Model = ({ url, position }) => {

    const ref = useRef(); // Create a reference to the 3D object

    // Rotate the model on each frame
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.006; // Rotate around the Y axis
        }
    });

    const { scene } = useLoader(GLTFLoader, url); // Load the model using the URL from props
    return <primitive object={scene} position={position} ref={ref}/>;
};

export default Model;