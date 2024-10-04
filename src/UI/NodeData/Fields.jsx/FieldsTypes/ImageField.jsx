import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ImageField(props) {
    const { onChange } = useContext(AppContext)

    const openImage = (e) => {
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
        <div className='relative w-2/3 flex flex-row justify-between items-center p-1'>
            {
                props.value &&
                <img className='relative w-10 aspect-video' src={props.value} />
            }
            <input type='file' className='relative w-2/3' onChange={(e) => openImage(e)} />

        </div>

    )
}

export default ImageField