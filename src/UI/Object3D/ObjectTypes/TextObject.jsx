import { Text } from '@react-three/drei'
import React from 'react'

function TextObject(props) {
    return (
        <>
        <mesh position={[0 , 0 , -0.01]}>

            <planeGeometry  args={[props.fields.args.value[0] , props.fields.args.value[1]]} />
        </mesh>

            <Text fontSize={props.fields.fontSize.value} color={props.fields.color.value} font=''>{props.fields.text.value}</Text>
            {
                props.fields.backgroundColor.value &&
                <meshStandardMaterial color={props.fields.backgroundColor.value} />
            }

        </>
    )
}

export default TextObject