import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { BackSide } from "three";

function Room({image}) {
  const map = useLoader(TextureLoader, image)

  return (
    <mesh position={[0, 0, 0]} receiveShadow>
          <sphereGeometry args={[1, 100]} />
          <meshStandardMaterial map={map} side={BackSide} />
        </mesh>
  )
}

export default Room