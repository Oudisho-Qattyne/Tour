import React from 'react'

function Cube(props) {
    return (
        <>
            <boxGeometry  args={props.fields.args.value}  />
            {
                props.fields.color.value &&
                <meshStandardMaterial color={props.fields.color.value} />
            }

        </>
    )
}

export default Cube