import React, { useContext } from 'react'
import Input from './Input/Input'
import { AppContext } from '../AppState'

function SelectImage({firstNode , direction}) {
    const { image, setImage , images , setImages , NODE , setModel , findMaxId} = useContext(AppContext)
    const addNode = () => {
        
        let newNode = { ...NODE }
        newNode.id = findMaxId(images) + 1
        newNode.image = image.image.value
        let newImages = [...images, newNode]

        if(firstNode){
            let newChildForNewNode = newNode.childrens.find(child => child.direction.type == direction.opposite)
            newChildForNewNode.child = firstNode.id
            let newChildForFirstNode = firstNode.childrens.find(child => child.direction.type == direction.type)
            newChildForFirstNode.child = newNode.id
        }

        setImages(newImages)
        setModel(null)
    }
    return (
        <dev className='relative w-full h-full p-10 justify-between items-center'>
            {
                image &&
                Object.keys(image).map(field => {
                    return (
                        <Input {...image[field]} onChange={(e) => {
                            setImage(prev => ({
                                ...prev,
                                image: {
                                    ...prev.image,
                                    value: URL.createObjectURL(e.target.files[0]),
                                }
                            }))
                        }} />
                    )
                }
                )
            }
            <dev className='relative w-full min-h-fit flex justify-center items-center p-5'>
                {
                    image.image.value &&
                    <img className='relative w-full rounded-lg shadow-lg' src={image.image.value} />
                }
            </dev>
            <dev className='relative w-full flex flex-row justify-evenly items-center'>
                <dev className='relative w-1/2 p-5'>
                    <button onClick={() => {
                        setImage(prev => ({
                            ...prev,
                            image:{
                                ...prev.image,
                                value:''
                            }
                        }))
                        setModel(null)
                    }} className='relative w-full flex justify-center items-center rounded-full bg-white border border-1 border-[#C1C1C1]'>
                        <p className='relative text-[#C1C1C1] py-3'>Cancel</p>
                    </button>
                </dev>
                <dev className='relative w-1/2 p-5'>
                    <button onClick={() => addNode()}className='relative w-full flex justify-center items-center rounded-full bg-black '>
                        <p className='relative text-[#FFFFFF] py-3'>Okay</p>
                    </button>
                </dev>
            </dev>
        </dev>
    )
}

export default SelectImage