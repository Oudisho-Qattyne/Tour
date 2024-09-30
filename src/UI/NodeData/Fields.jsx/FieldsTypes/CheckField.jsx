import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function CheckField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <input className='relative w-1/3' type={props.type} checked={props.value} onChange={(e) => onChange(props.nodeId , props.objectId , props.field , !props.value)} />

  )
}

export default CheckField