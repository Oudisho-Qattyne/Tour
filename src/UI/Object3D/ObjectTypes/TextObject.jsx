import { Text } from '@react-three/drei'
import React from 'react'

function TextObject(props) {
    return (
        <>
            <boxGeometry  args={props.fields.args.value}  />
            <Text fontSize={props.fields.fontSize.value} color={props.fields.color.value} font=''>{props.fields.text.value}</Text>
            {
                props.fields.backgroundColor.value &&
                <meshStandardMaterial color={props.fields.backgroundColor.value} />
            }

        </>
    )
}

export default TextObject