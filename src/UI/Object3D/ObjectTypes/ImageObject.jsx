import React, { useEffect, useState } from 'react'
import { TextureLoader } from 'three'

function ImageObject(props) {
    const [map, setMap] = useState(null)
    useEffect(() => {
        const textureLoader = new TextureLoader()
        textureLoader.load(props.fields.image.value, texture => {
            texture.needsUpdate = true
            setMap(texture)
        })
        map
        console.log(map);
    }, [props.fields.image.value])

    return (
        <mesh>
            <planeGeometry args={[props.fields.args.value[0], props.fields.args.value[1]]} />
            {
                map &&
                <meshBasicMaterial map={map} />
            }
        </mesh>
    )
}

export default ImageObject