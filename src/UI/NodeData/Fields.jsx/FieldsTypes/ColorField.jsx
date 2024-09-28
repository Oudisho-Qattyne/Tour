import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ColorField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <input className='relative w-2/3' type={props.type} value={props.value} onChange={(e) => onChange(props.nodeId , props.objectId , props.field , e.target.value)} />

  )
}

export default ColorField