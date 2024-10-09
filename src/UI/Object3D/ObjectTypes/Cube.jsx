import React, { useEffect, useState } from 'react'
import { NearestFilter, TextureLoader } from 'three'

function Cube(props) {
    const [texture , setTexture] = useState(null)
    useEffect(() => {
        if(props?.fields?.texture?.value){
            const textureLoader = new TextureLoader()
                textureLoader.load(props.fields.texture.value, texture => {
                    texture.minFilter = NearestFilter
                    texture.magFilter = NearestFilter
                    texture.anisotropy = 1
                    setTexture(texture)
                })
        }
    } , [props?.fields?.texture?.value])
    
    return (
        <>
            <boxGeometry  args={props.fields.args.value}  />
            {
                props.fields.color.value &&
                <meshStandardMaterial color={props.fields.color.value} />
            }
            {
                texture &&
                <meshStandardMaterial  map={texture} />
            }

        </>
    )
}

export default Cube