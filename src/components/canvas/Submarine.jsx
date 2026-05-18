import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Submarines = () => {
    const submarines = useGLTF("./sub/uuv.gltf");
    const submarinesRef = useRef();

    useFrame(() => {
        if (submarinesRef.current) {
            submarinesRef.current.updateMatrixWorld();
        }
    });

    return (
        <group ref={submarinesRef} position={[0, -1, 0]}>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 5, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} position={[0.5,0.1,4]}/>
            <pointLight intensity={0.5} position={[0.5,0.1,6]}/>
            <primitive  object={submarines.scene}
                scale={15}
            />
        </group>
    );
};

const SubmarinesCanvas = () => {
    return (
        <Canvas frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{position: [25, 15, 10], fov: 25, near: 0.1, 
            far: 200,}}
        gl={{ preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.5}
                    minPolarAngle={Math.PI / 2.5}
                    target={[0, 0, 2.5]}
                />
                <Submarines />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default SubmarinesCanvas;