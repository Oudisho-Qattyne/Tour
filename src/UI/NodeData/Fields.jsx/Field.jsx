import React from 'react'
import NumberField from './FieldsTypes/NumberField';
import ArrayOfNumbersField from './FieldsTypes/ArrayOfNumbersField';
import ColorField from './FieldsTypes/ColorField';

function Field(props) {
  switch (props.type) {
    case 'number':
        return(
          <NumberField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field}/>
        )
      case 'array':
        return(
          <ArrayOfNumbersField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field}/>
        )
        case 'color':
          return(
            <ColorField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field}/>
          )
    default:
      break;
  }
}

export default Field