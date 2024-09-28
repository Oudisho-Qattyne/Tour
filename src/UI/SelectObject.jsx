import React, { useContext } from 'react'
import Input from './Input/Input'
import { AppContext } from '../AppState'

function SelectObject({nodeId}) {
    const { objects , addObject , setModel} = useContext(AppContext)



    return (
        <div className='relative w-full h-full p-10 justify-between items-center rouded-lg overflow-hidden'>
            {
                objects &&
                    Object.keys(objects).length == 0 ?
                    <p className='relative w-full text-[#121212] text-center text-lg py-4'>No Objects To Show</p>
                    :
                    Object.keys(objects).map(
                        object =>
                            <div onClick={() => {
                                addObject(nodeId , objects[object])
                                setModel(null)
                                }} className='relative w-full flex justify-center items-center bg-[#C1C1C1] hover:bg-[#707070] border-b-1 border-[#FFFFFF] cursor-pointer'>
                                <p className='relative w-full text-[#121212] text-center text-lg py-4 select-none font-black '>{object}</p>
                            </div>
                    )
            }

        </div>
    )
}

export default SelectObject