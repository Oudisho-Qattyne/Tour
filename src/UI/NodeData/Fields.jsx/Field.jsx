import React from 'react'
import NumberField from './FieldsTypes/NumberField';
import ArrayOfNumbersField from './FieldsTypes/ArrayOfNumbersField';
import ColorField from './FieldsTypes/ColorField';
import TextField from './FieldsTypes/TextField';
import CheckField from './FieldsTypes/CheckField';
import SelectFunctionality from './FieldsTypes/SelectFunctionality';
import ImageField from './FieldsTypes/ImageField';
import ObjField from './FieldsTypes/ObjField';

function Field(props) {
  switch (props.type) {
    case 'number':
      return (
        <NumberField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
    case 'array':
      return (
        <ArrayOfNumbersField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
    case 'color':
      return (
        <ColorField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
    case 'text':
      return (
        <TextField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
      case 'checkbox':
      return (
        <CheckField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
      case 'select_function':
      return (
        <SelectFunctionality {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
      )
      case 'image':
        return (
          <ImageField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
        )
        case 'obj':
          return (
            <ObjField {...props} nodeId={props.nodeId} objectId={props.objectId} field={props.field} />
          )
    default:
      break;
  }
}

export default Field