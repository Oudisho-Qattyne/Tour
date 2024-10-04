import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ObjField(props) {
    const { onChange } = useContext(AppContext)

    const openObj = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
            const fileUrl = e.target.result
            
            onChange(props.nodeId, props.objectId, props.field, fileUrl)
            // onChange(props.nodeId, props.objectId, props.field, URL.createObjectURL(file))
        }
        if (file) {
            reader.readAsDataURL(file)
        }
    }
    
    return (
            <input type='file' className='relative w-2/3' onChange={(e) => openObj(e)} />
    )
}

export default ObjField