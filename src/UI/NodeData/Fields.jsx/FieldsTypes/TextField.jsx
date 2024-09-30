import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function TextField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <textarea className='relative w-2/3'  value={props.value} onChange={(e) => onChange(props.nodeId , props.objectId , props.field , e.target.value)} />

  )
}

export default TextField