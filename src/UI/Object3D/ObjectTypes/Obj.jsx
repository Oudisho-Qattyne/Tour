import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import {  NearestFilter, TextureLoader } from 'three'
import { MTLLoader } from 'three/examples/jsm/Addons.js'

function Obj(props) {
    const [texture , setTexture] = useState(null)
 
    const obj = useLoader(OBJLoader, props.fields.obj.value)
    // useLayoutEffect(() => {
    //     obj.traverse(child => {
    //       if (child.isMesh) {
    //         child.material.color.set(props?.fields?.color?.value)
    //       }
    //     })
    //   }, [props?.fields?.color?.value])
    useEffect(() => {
        if(props?.fields?.texture?.value){
            const textureLoader = new TextureLoader()
                textureLoader.load(props?.fields?.texture.value, texture => {
                    texture.minFilter = NearestFilter
                    texture.magFilter = NearestFilter
                    texture.anisotropy = 1
                    setTexture(texture)
                })
        }
    } , [props?.fields?.texture.value])
    const geometry = useMemo(() => {
        let g;
        obj.traverse((c) => {
          if (c.type === "Mesh") {
            const _c = c ;
            g = _c.geometry;
          }
        });
        return g;
      }, [obj]);
    return (
        <mesh geometry={geometry} scale={props.fields.args.value}>
            {/* <primitive object={obj.clone()} /> */}
           
            {
                texture &&
                <meshStandardMaterial map={texture} />
            }
        </mesh>
    )
}

export default Obj