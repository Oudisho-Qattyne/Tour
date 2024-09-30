import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import ObjectData from './ObjectData'
import SelectObject from '../SelectObject'
import dropDownIcon from './../../assets/icons/dropdownIcon.png'
function NodeData({ nodeL }) {
    const { node, setNode, setModel } = useContext(AppContext)
    const [showObjects, setShowObjects] = useState(false)
    return (
        <div className='relative flex flex-col justify-start items-start border  rounded-xl overflow-hidden'  >
            <div className='relative w-full flex flex-row justify-center items-center border border-b-2 cursor-pointer p-1 ' style={{ background: nodeL?.id == node?.id ? '#707070' : '#C1C1C1' }}>
                <div onClick={() => setNode(nodeL)} className='relative w-[80%] flex-row justify-center items-center  ' >
                    <img src={nodeL.image} className='relative w-1/2 h-[50px]' />
                </div>
                <div onClick={() => setShowObjects(prev => !prev)} className='relative w-[20%] h-[50px] flex justify-center items-center'>
                    <img src={dropDownIcon} className={`relative w-full aspect-square ${showObjects ? 'rotate-180' : '' } transition-all duration-500 `} />
                </div>
            </div>
            {
                showObjects &&
                    node?.objects.length == 0 ?
                    <p className='relative w-full  text-[#C1C1C1] text-center text-sm py-4'>No Objects To Show</p>

                    :
                    showObjects &&

                    node?.objects.map(objectData =>
                        <ObjectData objectData={objectData} nodeId={nodeL.id} />
                    )
            }
            {
                showObjects &&
                <div onClick={() => setModel(<SelectObject nodeId={nodeL.id} />)} className='relative w-full flex justify-center items-center rounded-lg bg-[#C1C1C1] hover:bg-[#707070] border border-[#707070] cursor-pointer transition-all'>
                    <p className='relative text-[#121212] font-black text-center text-lg py-4 select-none'>Add New Object</p>

                </div>
            }
        </div>
    )
}

export default NodeData