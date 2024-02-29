import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLocader from '../Loader';

const Computers = () => {
    // public folder is the default root: 
    // https://github.com/vitejs/vite/discussions/14201#discussioncomment-7233423
    const computer = useGLTF('./desktop_pc/scene.gltf')  // .gltf file: 3d model file


    return (
        <mesh>
            {/*create light or we wouldn't see anything*/}
            <hemisphereLight intensity={0.15} groundColor="black" />
            {/*create refelction light*/}
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={0.75}
                postion={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            frameLoop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas >
    )
}

export default ComputersCanvas;
