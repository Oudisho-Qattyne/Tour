import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Field from './Fields.jsx/Field'

function ObjectData({ objectData, nodeId }) {

    const { setSelectedObjects, selectedObjects, node, toggleObjectFromSelection, deleteObject } = useContext(AppContext)
    const [showObjectsProps, setShowObjectsProps] = useState(false)




    return (
        <div className='relative w-full flex flex-col justify-start items-start' >
            <div className='relative w-full flex flex-row justify-center items-center border border-b-2 cursor-pointer p-1' style={{ background: selectedObjects.find(objectId => objectId == objectData.id) && node.id == nodeId ? '#707070' : '#C1C1C1' }}>
                <div onClick={() => toggleObjectFromSelection(objectData.id)} className='relative w-[60%] h-[25px] flex-row justify-start items-center  ' >
                    <p>{objectData.type}</p>
                </div>
                <div onClick={() => deleteObject(nodeId, objectData.id)} className='relative w-[20%] h-[25px] bg-red-300 flex justify-center items-center'>
                    <p className='relative text-[9px] font-black'>DELETE</p>
                </div>
                <div onClick={() => setShowObjectsProps(prev => !prev)} className='relative w-[20%] h-[25px] bg-red-400 flex justify-center items-center'>

                </div>
            </div>
            {
                showObjectsProps &&
                Object.keys(objectData.fields).map(prop => {
                    return (
                        <div className='relative w-full flex flex-row justify-between items-center p-1'>
                            <p className='relative w-1/3 text-[10px] '>{prop} : </p>
                            {/* <input className='relative w-1/2' type={objectData.fields[prop].type} value={objectData.fields[prop].value} onChange={(e) => console.log(e.target.value)} /> */}
                            <Field {...objectData.fields[prop]} nodeId={nodeId} objectId={objectData.id} field={prop} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default ObjectData