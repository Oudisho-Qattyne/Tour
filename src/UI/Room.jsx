import { useLoader } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { BackSide, RepeatWrapping } from "three";

function Room({ image, position, args }) {
  const [map, setMap] = useState(null)
  useEffect(() => {
    //  map = useLoader(TextureLoader, image )
    const textureLoader = new TextureLoader()
    textureLoader.load(image, texture => {
      console.log(texture);
      
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      texture.repeat.x = -1
      setMap(texture)
    })

  }, [image])

  return (
    <mesh position={position ? position : [0, 0, 0]} receiveShadow>
      <sphereGeometry args={args ? args : [1, 100]} />
      {
        map &&
        <meshStandardMaterial map={map} side={BackSide} />
      }
    </mesh>
  )
}

export default Room