import React, { useContext } from 'react'
import Input from './Input/Input'
import { AppContext } from '../AppState'

function SelectImage({firstNode , direction}) {
    const { image, setImage , images , setImages , NODE , setModel , findMaxId} = useContext(AppContext)
    const addNode = () => {
        
        let newNode = { ...NODE }
        if(firstNode){
            newNode.id = findMaxId(images) + 1
        }
        else{
            newNode.id = 1
        }
        newNode.image = image.image.value
        let newImages = [...images, newNode]

        if(firstNode){
            let newPosition = [0,0,0]

            newPosition = [
                direction.location[0] !=0 ? direction.location[0] > 0 ? firstNode.position[0] + 4 : firstNode.position[0] - 4 : firstNode.position[0],
                direction.location[1] + 0.4 != 0 ? direction.location[1] + 0.4 > 0 ? firstNode.position[1] + 4 : firstNode.position[1] - 4 : firstNode.position[1],
                direction.location[2]  != 0 ? direction.location[2]  > 0 ? firstNode.position[2] + 4 : firstNode.position[2] - 4 : firstNode.position[2],

            ]
            console.log(newPosition);
            
            let newChildForNewNode = newNode.childrens.find(child => child.direction.type == direction.opposite)
            newChildForNewNode.child = firstNode.id
            let newChildForFirstNode = firstNode.childrens.find(child => child.direction.type == direction.type)
            newChildForFirstNode.child = newNode.id
            newNode.position = newPosition
        }

        setImages(newImages)
        setModel(null)
    }
    const openImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
            const imageUrl = e.target.result
            setImage(prev => ({
                ...prev,
                image: {
                    ...prev.image,
                    // value: imageUrl,
                    value: URL.createObjectURL(file),

                }
            }))
        }

        if(file){
            reader.readAsDataURL(file)
        }
    }
    console.log(image);
    
    return (
        <div className='relative w-full h-full p-10 justify-between items-center'>
            {
                image &&
                Object.keys(image).map(field => {
                    return (
                        <Input {...image[field]} onChange={openImage} />
                    )
                }
                )
            }
            <div className='relative w-full min-h-fit flex justify-center items-center p-5'>
                {
                    image.image.value &&
                    <img className='relative w-full rounded-lg shadow-lg' src={image.image.value} />
                }
            </div>
            <div className='relative w-full flex flex-row justify-evenly items-center'>
                <div className='relative w-1/2 p-5'>
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
                </div>
                <div className='relative w-1/2 p-5'>
                    <button onClick={() => addNode()}className='relative w-full flex justify-center items-center rounded-full bg-black '>
                        <p className='relative text-[#FFFFFF] py-3'>Okay</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelectImage