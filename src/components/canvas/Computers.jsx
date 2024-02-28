import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLocader from '../Loader.jsx';

const Computers = () => {
    // public folder is the default root: 
    // https://github.com/vitejs/vite/discussions/14201#discussioncomment-7233423
    const computer = useGLTF('./desktop_pc/scene.gltf')  // .gltf file: 3d model file


    return (
        <mesh>
            {/*create light or we wouldn't see anything*/}
            <hemisphereLight intensity={0.15} groundColor="black" />
            {/*create refelction light*/}
            <printLight intensity={1} />
            <primitive
                object={computer.scene}
            />
        </mesh>
    )
}

export default Computers
