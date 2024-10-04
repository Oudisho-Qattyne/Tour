import { useFrame, useLoader } from '@react-three/fiber'
import React, { useContext, useEffect, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { BackSide, RepeatWrapping } from "three";
import { AppContext } from '../AppState';
import Object3D from './Object3D/Object3D';

function Room({ image, position, args  }) {
  const [map, setMap] = useState(null)
  const [ nextMap , setNextMap] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { setPosition, fov, loading, setLoading , node , state , setState } = useContext(AppContext)
  const load = async () => {
    const textureLoader = new TextureLoader()
    textureLoader.load(image, texture => {
      console.log('loading');
      
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      texture.repeat.x = -1
      setMap(texture)
      
      setLoading(false)

    })
  }

  useFrame(state => {
    if(!state){
      setState(state)
    }
    // if (loaded ) {
    //   console.log('zooming');
      
    //   state.camera.fov -= 1
    //   if(state.camera.fov < 30){
    //     console.log('finished zooming');
       
    //     setLoaded(false)
    //   }
    // }
    // else{
      
      state.camera.fov = fov
      // if(map != nextMap){
      //   console.log('set the zoom and the map');
      //   setMap(nextMap)
      // }
    // }
    // return null
  })
  useEffect(() => {
    //  map = useLoader(TextureLoader, image )
    load()

  }, [image])

  return (
    <>
    <mesh position={position ? position : [0, 0, 0]} receiveShadow castShadow>
      <sphereGeometry args={args ? args : [1, 100]} />
      {
        map &&
        <meshStandardMaterial map={map} side={BackSide} />
      }
    </mesh>
    {
            node?.objects?.map(object => <Object3D {...object} nodeId={node?.id}/>)
          }
      </>
  )
}

export default Room