import React, { useContext, useState } from 'react'
import { AppContext } from '../AppState'
import Input from './Input/Input'
import SoundPlayer from './SoundPlayer'

function SelectFunction(props) {
    const { functions, setModel, images, node, findMaxId, onChange } = useContext(AppContext)
    const [selectedFunction, setSelectedFunction] = useState(null)
    const [sound, setSound] = useState({
        sound: {
            id: 1,
            value: '',
            error: '',
            placeholder: 'Sound File',
            validation: ['required'],
            type: 'file',
            valid: true
        }
    }
    )

    const openSound = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
            const fileUrl = e.target.result
            setSelectedFunction(prev => ({
                ...prev,
                sound: fileUrl,
                // sound: URL.createObjectURL(file),
            }))
            setSound(prev => ({
                ...prev,
                sound: {
                    ...prev.sound,
                    // value: URL.createObjectURL(file)
                    value: fileUrl
                }
            }))
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }


    return (
        <div className='relative w-full flex flex-col justify-center items-center'>
            {
                functions.length == 0 ?
                    <p className='relative text-[10px] text-[#121212] '>No Functions</p>
                    :
                    functions.map(func =>
                        <div onClick={() => setSelectedFunction(func)} className='relative w-full flex justify-center items-center bg-[#707070] hover:bg-[#121212] transition-all duration-300 cursor-pointer p-5' style={selectedFunction?.name == func.name ? {backgroundColor:'#121212'} : {backgroundColor:'#707070'}}>
                            <p className='relative text-lg text-white select-none'>{func.title}</p>
                        </div>
                    )
            }
            {
                selectedFunction?.name == 'play-sound' &&
                <div className='relative w-full flex flex-col justify-center items-center'>
                    <Input {...sound.sound} onChange={openSound} />
                    {
                        sound.sound.value &&
                        <audio controls>
                            <source src={sound.sound.value} />
                            Your browser does not support the audio element.
                        </audio>
                    }
                </div>
            }
            {
                selectedFunction?.name == 'move-to-node' &&
                <div className='relative w-full flex flex-row flex-wrap justify-start items-start p-2 '>
                    {images.filter(node => node.id != props.nodeId) == 0 ?

                        <p className='relative w-full text-center text-lg text-white select-none py-4'>No Nodes To Show</p>

                        :
                        images.filter(node => node.id != props.nodeId).map(node =>
                            <div onClick={() => setSelectedFunction(prev => ({
                                ...prev,
                                nodeId: node.id
                            }))} className={`relative w-1/3 p-2 hover:ring-1 hover:ring-white cursor-pointer rounded-lg ${selectedFunction?.nodeId == node.id ? 'ring-2 ring-[#C1C1C1]' : ''}`}>
                                <img src={node.image} className='relative w-full ' />
                            </div>
                        )
                    }
                </div>
            }
            {
                selectedFunction?.name == 'show-object' &&
                <div className='relative w-full flex flex-row flex-wrap justify-start items-start p-2 '>
                    {node.objects.filter(obj => obj.id != props.objectId) == 0 ?

                        <p className='relative w-full text-center text-lg text-white select-none py-4'>No Objects To Show</p>

                        :
                        node.objects.filter(obj => obj.id != props.objectId).map(obj =>
                            <div onClick={() => setSelectedFunction(prev => ({
                                ...prev,
                                objectId: obj.id
                            }))} className={`relative w-1/3 p-2 hover:ring-1 hover:ring-white cursor-pointer rounded-lg ${selectedFunction?.objectId == obj.id ? 'ring-2 ring-[#C1C1C1]' : ''}`}>
                                <p className='relative w-full text-center text-lg text-white select-none py-4'>{obj.fields.color.value} {obj.type}</p>

                            </div>
                        )
                    }
                </div>
            }
            <div className='relative w-full flex flex-row justify-evenly items-center'>
                <div className='relative w-1/2 p-5'>
                    <button onClick={() => {
                        setModel(null)
                    }} className='relative w-full flex justify-center items-center rounded-full bg-white border border-1 border-[#C1C1C1]'>
                        <p className='relative text-[#C1C1C1] py-3'>Cancel</p>
                    </button>
                </div>
                <div className='relative w-1/2 p-5'>
                    <button onClick={() => {
                        const newId = findMaxId(props.value) + 1
                        onChange(props.nodeId, props.objectId, props.field, [...props.value, { ...selectedFunction, id: newId }])
                        setModel(null)
                    }} className='relative w-full flex justify-center items-center rounded-full bg-black border border-white  '>
                        <p className='relative text-[#FFFFFF] py-3'>Okay</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelectFunction