import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ caption, ...props }) {
    const group = useRef()
    const { nodes, materials, animations, cameras } = useGLTF('model.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => void (actions['Camera.001Action'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['Camera.001Action']
        const t = state.clock.getElapsedTime() / 2
        const offset = caption.current.innerText * 5
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset / 2.5, 100, delta)
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <pointLight args={[`#baa898`, 0.05]} position={[-55, 0, 13]} />
                <pointLight args={[`#baa898`, 0.05]} position={[0, 0, 3]} />
                <PerspectiveCamera name="Camera001" makeDefault={true} far={1000} near={0.01} fov={37.3} position={[-1.05, 2.22, 6.43]} rotation={[-0.03, 0.08, 0]} />
                <mesh name="L" geometry={nodes.L.geometry} material={materials.L} position={[1.06, 2, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.2, 1.08]} />
                <mesh name="lofasz1" geometry={nodes.lofasz1.geometry} material={materials.lofasz1} position={[0, 0.74, -0.01]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh name="lofasz2" geometry={nodes.lofasz2.geometry} material={materials.lofasz2} position={[0, 3.26, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                <mesh name="O" geometry={nodes.O.geometry} material={materials.O} position={[0.04, 2, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.4, 1]} />
                <mesh name="Torus" geometry={nodes.Torus.geometry} material={materials.Torus} position={[0, 2, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.7, 1]} />
                <mesh name="V" geometry={nodes.V.geometry} material={materials.V} position={[-0.48, 2.09, -0.01]} rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={[1, 0.2, 1]} />
                <mesh name="Y" geometry={nodes.Y.geometry} material={materials.Y} position={[-1.09, 1.95, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.36} />
                <mesh name="R" geometry={nodes.R.geometry} material={materials.R} position={[0.52, 2, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0.78, 0.2, 1.07]} />
            </group>
        </group>
    )
}

useGLTF.preload('model.glb')