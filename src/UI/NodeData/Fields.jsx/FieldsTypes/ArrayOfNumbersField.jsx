import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ArrayOfNumbersField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <div className='relative w-2/3 flex flex-col justify-between items-center '>
    <input className='relative full' type='number' value={props.value[0] * 100} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[e.target.value/100 , props.value[1] , props.value[2]] )}/>
    <input className='relative full' type='number' value={props.value[1] * 100} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[props.value[0] , e.target.value/100 , props.value[2]] )}/>
    <input className='relative full' type='number' value={props.value[2] * 100} onChange={(e) => onChange(props.nodeId , props.objectId , props.field ,[props.value[0] , props.value[1] , e.target.value/100] )}/>


    </div>
  )
}

export default ArrayOfNumbersField