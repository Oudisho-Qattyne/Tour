import React, { useRef, useState } from 'react'
import Model from './Model'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Sphere, Text } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const gltf = useLoader(GLTFLoader, '/scene.gltf');

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX

  return (
    <mesh castShadow
      {...props}
      scale={[0.05, 0.05, 0.05]}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <primitive object={gltf.scene.clone()}  scale={hovered ? 1.1 : 1} onClick={(event) => {
        props.onPress()
        setActive(!active)
      }}/>
      {
        props.delete &&
        <mesh position={[0.02, 0.01, 0.05]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <Text rotation={[0,-Math.PI/2 , 0]} position={[0,1,1]} color='red'>Delete</Text>
          <meshStandardMaterial color="red" transparent />
        </mesh>
      }

    </mesh>
  )
}


export default Box