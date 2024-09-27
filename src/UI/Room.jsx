import { useFrame, useLoader } from '@react-three/fiber'
import React, { useContext, useEffect, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { BackSide, RepeatWrapping } from "three";
import { AppContext } from '../AppState';

function Room({ image, position, args }) {
  const [map, setMap] = useState(null)
  const { setPosition, fov, loading, setLoading } = useContext(AppContext)
  const load = async () => {
    const textureLoader = new TextureLoader()
    textureLoader.load(image, texture => {
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      texture.repeat.x = -1
      setMap(texture)
    })
  }

  useFrame(state => {
    state.camera.fov = fov
    state.camera.updateProjectionMatrix()
    return null
  })
  useEffect(() => {
    //  map = useLoader(TextureLoader, image )
    load()

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