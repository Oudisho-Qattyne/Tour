import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { BackSide } from "three";

function Room({ image, position, args }) {
  let map = null
  if (image) {
   map = useLoader(TextureLoader, image)

  }

  return (
    <mesh position={position ? position : [0, 0, 0]} receiveShadow>
      <sphereGeometry args={args ? args : [1, 100]} />
      {
        image &&
        <meshStandardMaterial map={map} side={BackSide} />
      }
    </mesh>
  )
}

export default Room