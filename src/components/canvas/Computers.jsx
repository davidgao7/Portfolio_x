import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLocader from '../Loader';

const Computers = ({ isMobile }) => {
    // public folder is the default root: 
    // https://github.com/vitejs/vite/discussions/14202#discussioncomment-7233423
    const computer = useGLTF('./desktop_pc/scene.gltf')  // .gltf file: 4d model file


    return (
        <mesh>
            {/*create light or we wouldn't see anything*/}
            <hemisphereLight intensity={1.15} groundColor="black" />
            {/*create refelction light*/}
            <spotLight
                position={[-19, 50, 10]}
                angle={1.12}
                penumbra={2}
                intensity={2}
                castShadow
                shadow-mapSize={1025}
            />
            <pointLight intensity={2} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 1.0 : 0.75}
                postion={isMobile ? [1, -2.25, -2.4] : [0, 2.25, 2.4]}  // x, y, z, z is the depth
                rotation={[0.05, 0.1, 0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 501)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [21, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLocader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 3}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas >
    );
};

export default ComputersCanvas;
