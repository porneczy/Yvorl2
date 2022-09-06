import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import Model from './Model'

function CanvasComponent({ caption }) {

    return (
        <>
            <Canvas style={{ position: 'fixed' }}  >
                <Suspense fallback={
                    <Html center className="loader2">
                        LOADING
                    </Html>
                }>
                    <Model caption={caption} />
                </Suspense>
            </Canvas >
        </>
    )
}

export default CanvasComponent