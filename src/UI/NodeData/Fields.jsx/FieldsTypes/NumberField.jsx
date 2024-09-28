import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function NumberField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <input className='relative w-1/3' type={props.type} value={props.value *10} onChange={(e) => onChange(props.nodeId , props.objectId , props.field , e.target.value/10)} />

  )
}

export default NumberField