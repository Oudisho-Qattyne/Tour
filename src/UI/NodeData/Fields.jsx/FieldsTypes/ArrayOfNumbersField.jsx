import React, { useContext } from 'react'
import { AppContext } from '../../../../AppState'

function ArrayOfNumbersField(props) {
  const {onChange} = useContext(AppContext)

  return (
    <div className='relative w-2/3 flex flex-col'>
      {
        props.value.map((value , index)=>
          <input className='relative full' type='number' value={value * 100} onChange={(e) => {
            let value = props.value.map((value , indexL) => {
              if(indexL == index){
                return e.target.value/100
              }
              else{
                return value
              }
            })
            onChange(props.nodeId , props.objectId , props.field ,value )}}/>

        )
      }
  
    </div>
  )
}

export default ArrayOfNumbersField