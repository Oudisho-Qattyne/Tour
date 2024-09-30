import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'
import SelectFunction from '../../../SelectFunction'
import deleteIcon from './../../../../assets/icons/deleteIcon.png'
function SelectFunctionality(props) {
    const { onChange, setModel } = useContext(AppContext)

    return (
        <div className='relative w-2/3 flex flex-col justify-center items-center'>
            {
                props.value.length == 0 ?
                    <p className='relative text-[10px] text-[#121212] '>No Functions Selected</p>
                    :
                    props.value.map(func =>
                        <div className='relative w-full flex flex-row justify-between items-center p-1'>
                            <p className='relative text-[10px] text-[#121212] '>{func.title} : </p>
                            <div onClick={() => onChange(props.nodeId, props.objectId, props.field,props.value.filter(funcL => funcL.id != func.id ))} className='relative w-1/6 cursor-pointer rounded-full bg-[#121212] flex justify-center items-center aspect-square p-1'>
                                <img src={deleteIcon} className='relative w-full' />
                            </div>
                        </div>
                    )
            }
            <div onClick={() => setModel(<SelectFunction {...props} />)} className='relative w-full p-2 rounded-lg bg-[#707070] overflow-hidden hover:bg-[#121212] flex justify-center items-center transition-all duration-300 cursor-pointer'>
                <p className='relative text-[10px] text-white select-none'>Add Function +</p>
            </div>
        </div>
    )
}

export default SelectFunctionality