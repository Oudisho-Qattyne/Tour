import React from 'react'

function Sphere(props) {
    return (
        <>
            <sphereGeometry  args={props.fields.args.value}  />
            {
                props.fields.color.value &&
                <meshStandardMaterial color={props.fields.color.value} />
            }

        </>
    )
}

export default Sphere