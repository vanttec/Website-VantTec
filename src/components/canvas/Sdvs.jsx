import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Sdvs = () => {
    const sdv = useGLTF("./sub/uuv.gltf");
    const sdvRef = useRef();

    useFrame(() => {
        if (sdvRef.current) {
            sdvRef.current.updateMatrixWorld();
        }
    });

    return (
        <group ref={sdvRef} position={[0, 0, 0]}>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 5, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} position={[1,1,0]}/>
            <pointLight intensity={1} position={[3.5,1,0]}/>
            <primitive  object={sdv.scene}
                scale={10.5}
            />
        </group>
    );
};

const SdvsCanvas = () => {
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
                    target={[2, 0, 0]}
                />
                <Sdvs />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default SdvsCanvas;