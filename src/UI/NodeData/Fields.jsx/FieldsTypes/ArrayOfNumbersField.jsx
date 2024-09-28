import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ArrayOfNumbersField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <div className='relative w-2/3 flex flex-row justify-between items-center '>
    <input className='relative w-[33%]' type='number' value={props.value[0] * 10} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[e.target.value/10 , props.value[1] , props.value[2]] )}/>
    <input className='relative w-[33%]' type='number' value={props.value[1] * 10} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[props.value[0] , e.target.value/10 , props.value[2]] )}/>
    <input className='relative w-[33%]' type='number' value={props.value[2] * 10} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[props.value[0] , props.value[1] , e.target.value/10] )}/>


    </div>
  )
}

export default ArrayOfNumbersField