import React, { createContext, useState } from 'react'
import { BACK, BACK_LEFT, BACK_RIGTH, BOTTOM, BOTTOM_BACK, BOTTOM_BACK_LEFT, BOTTOM_BACK_RIGTH, BOTTOM_FRONT, BOTTOM_FRONT_LEFT, BOTTOM_FRONT_RIGTH, BOTTOM_LEFT, BOTTOM_RIGHT, FRONT, FRONT_LEFT, FRONT_RIGHT, LEFT, RIGHT, TOP, TOP_BACK, TOP_BACK_LEFT, TOP_BACK_RIGHT, TOP_FRONT, TOP_FRONT_LEFT, TOP_FRONT_RIGTH, TOP_LEFT, TOP_RIGHT } from './Constants/CONSTANTS.js'
import rubberIcon from './assets/icons/rubberIcon.png'
import pencilIcon from './assets/icons/pencilIcon.png'
import selectorIcon from './assets/icons/selectorIcon.png'
export const AppContext = createContext()

export const StateProvider = ({ children }) => {

  let NODE = {
    id: 1,
    image: null,
    position: [0, 0, 0],
    objects: [

    ],
    childrens: [
      {
        id: 1,
        direction: FRONT,
        child: null
      },
      {
        id: 2,
        direction: FRONT_RIGHT,
        child: null
      },
      {
        id: 3,
        direction: FRONT_LEFT,
        child: null
      },
      {
        id: 4,
        direction: BACK,
        child: null
      },
      {
        id: 5,
        direction: BACK_RIGTH,
        child: null
      },
      {
        id: 6,
        direction: BACK_LEFT,
        child: null
      },
      {
        id: 7,
        direction: RIGHT,
        child: null
      },
      {
        id: 8,
        direction: LEFT,
        child: null
      },
      // {
      //   id: 9,
      //   direction: TOP,
      //   child: null
      // },
      // {
      //   id: 10,
      //   direction: TOP_FRONT,
      //   child: null
      // },
      // {
      //   id: 11,
      //   direction: TOP_FRONT_RIGTH,
      //   child: null
      // },
      // {
      //   id: 12,
      //   direction: TOP_FRONT_LEFT,
      //   child: null
      // },
      // {
      //   id: 13,
      //   direction: TOP_BACK,
      //   child: null
      // },
      // {
      //   id: 14,
      //   direction: TOP_BACK_RIGHT,
      //   child: null
      // },
      // {
      //   id: 15,
      //   direction: TOP_BACK_LEFT,
      //   child: null
      // },
      // {
      //   id: 16,
      //   direction: TOP_RIGHT,
      //   child: null
      // },
      // {
      //   id: 17,
      //   direction: TOP_LEFT,
      //   child: null
      // },
      // {
      //   id: 18,
      //   direction: BOTTOM,
      //   child: null
      // },
      // {
      //   id: 19,
      //   direction: BOTTOM_FRONT,
      //   child: null
      // },
      // {
      //   id: 20,
      //   direction: BOTTOM_FRONT_RIGTH,
      //   child: null
      // },
      // {
      //   id: 21,
      //   direction: BOTTOM_FRONT_LEFT,
      //   child: null
      // },
      // {
      //   id: 22,
      //   direction: BOTTOM_BACK,
      //   child: null
      // },
      // {
      //   id: 23,
      //   direction: BOTTOM_BACK_RIGTH,
      //   child: null
      // },
      // {
      //   id: 24,
      //   direction: BOTTOM_BACK_LEFT,
      //   child: null
      // },
      // {
      //   id: 25,
      //   direction: BOTTOM_RIGHT,
      //   child: null
      // },
      // {
      //   id: 26,
      //   direction: BOTTOM_LEFT,
      //   child: null
      // },
    ]
  }
const objects = {
  cube:{
    id: 1,
    type: 'cube',
    fields: {
      functionality:{
        id:1,
        type:'select_function',
        value:[]
      },
      visible:{
        id:1,
        type:'checkbox',
        value:true
      },
      position: {
        id: 1,
        type: 'array',
        value: [-0.1, 0, 0]
      },
      args: {
        id: 1,
        type: 'array',
        value: [0.1, 0.1, 0.1]
      },
      rotationX: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationY: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationZ: {
        id: 1,
        type: 'number',
        value: 0
      },
      color: {
        id: 1,
        type: 'color',
        value: '#FF0000'
      }
    }
  },
  pointLight : {
    id: 2,
    type: 'pointLight',
    fields: {
      functionality:{
        id:1,
        type:'select_function',
        value:[]
      },
      visible:{
        id:1,
        type:'checkbox',
        value:true
      },
      position: {
        id: 1,
        type: 'array',
        value: [-0.1, 0, 0]
      },
      args: {
        id: 1,
        type: 'array',
        value: [0.1, 0.1, 0.1]
      },
      rotationX: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationY: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationZ: {
        id: 1,
        type: 'number',
        value: 0
      },
      color: {
        id: 1,
        type: 'color',
        value: '#FF0000'
      },
      intensity: {
        type: 'number',
        value: 1
      }
    }
  },
  sphere : {
    id: 3,
    type: 'sphere',
    fields: {
      functionality:{
        id:1,
        type:'select_function',
        value:[]
      },
      visible:{
        id:1,
        type:'checkbox',
        value:true
      },
      position: {
        id: 1,
        type: 'array',
        value: [-0.1, 0, 0]
      },
      args: {
        id: 1,
        type: 'array',
        value: [0.1, 16, 100]
      },
      rotationX: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationY: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationZ: {
        id: 1,
        type: 'number',
        value: 0
      },
      color: {
        id: 1,
        type: 'color',
        value: '#FF0000'
      }
    }
  },
  text:{
    id: 1,
    type: 'text',
    fields: {
      functionality:{
        id:1,
        type:'select_function',
        value:[]
      },
      visible:{
        id:1,
        type:'checkbox',
        value:true
      },
      position: {
        id: 1,
        type: 'array',
        value: [-0.1, 0, 0]
      },
      args: {
        id: 1,
        type: 'array',
        value: [0.1, 0.1, 0.1]
      },
      rotationX: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationY: {
        id: 1,
        type: 'number',
        value: 0
      },
      rotationZ: {
        id: 1,
        type: 'number',
        value: 0
      },
      color: {
        id: 1,
        type: 'color',
        value: '#FF0000'
      },
      backgroundColor:{
        id:1,
        type : 'color',
        value : '#C1C1C1'
      },
      text:{
        id:1,
        type:'text',
        value:'test'
      },
      fontSize:{
        id:1,
        type:'number',
        value:10
      }
    }
  },
}
const functions = [
  {
    id:1,
    title:'Show Object',
    name:'show-object',
    objectId:null
  },
  {
    id:2,
    title:'Play Sound',
    name:'play-sound',
    sound:null
  },
  {
    id:3,
    title:'Move To Node',
    name:'move-to-node',
    nodeId:null
  }
]
  const [images, setImages] = useState(

    [
      //   {
      //     id: 1,
      //     image: i1,
      //     childrens: [
      //       {
      //         id: 1,
      //         direction: FRONT,
      //         child: null
      //       },
      //       {
      //         id: 2,
      //         direction: FRONT_RIGHT,
      //         child: null
      //       },
      //       {
      //         id: 3,
      //         direction: FRONT_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 4,
      //         direction: BACK,
      //         child: null
      //       },
      //       {
      //         id: 5,
      //         direction: BACK_RIGTH,
      //         child: null
      //       },
      //       {
      //         id: 6,
      //         direction: BACK_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 7,
      //         direction: RIGHT,
      //         child: null
      //       },
      //       {
      //         id: 8,
      //         direction: LEFT,
      //         child: null
      //       },
      //       {
      //         id: 9,
      //         direction: TOP,
      //         child: null
      //       },
      //       {
      //         id: 10,
      //         direction: TOP_FRONT,
      //         child: null
      //       },
      //       {
      //         id: 11,
      //         direction: TOP_FRONT_RIGTH,
      //         child: null
      //       },
      //       {
      //         id: 12,
      //         direction: TOP_FRONT_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 13,
      //         direction: TOP_BACK,
      //         child: null
      //       },
      //       {
      //         id: 14,
      //         direction: TOP_BACK_RIGHT,
      //         child: null
      //       },
      //       {
      //         id: 15,
      //         direction: TOP_BACK_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 16,
      //         direction: TOP_RIGHT,
      //         child: null
      //       },
      //       {
      //         id: 17,
      //         direction: TOP_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 18,
      //         direction: BOTTOM,
      //         child: null
      //       },
      //       {
      //         id: 19,
      //         direction: BOTTOM_FRONT,
      //         child: null
      //       },
      //       {
      //         id: 20,
      //         direction: BOTTOM_FRONT_RIGTH,
      //         child: null
      //       },
      //       {
      //         id: 21,
      //         direction: BOTTOM_FRONT_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 22,
      //         direction: BOTTOM_BACK,
      //         child: null
      //       },
      //       {
      //         id: 23,
      //         direction: BOTTOM_BACK_RIGTH,
      //         child: null
      //       },
      //       {
      //         id: 24,
      //         direction: BOTTOM_BACK_LEFT,
      //         child: null
      //       },
      //       {
      //         id: 25,
      //         direction: BOTTOM_RIGHT,
      //         child: null
      //       },
      //       {
      //         id: 26,
      //         direction: BOTTOM_LEFT,
      //         child: null
      //       },
      //     ]
      //   },
      // {
      //   id:2,
      //   image: colorMap2,
      //   childrens: [
      //     {
      //       id: 1,
      //       type: 'back',
      //       child: 2
      //     },
      //     {
      //       id: 2,
      //       type: 'front',
      //       child: 0
      //     },
      //     {
      //       id: 3,
      //       type: 'top',
      //       child: 1
      //     },
      //     {
      //       id:4,
      //       type:'left',
      //       child:4
      //     }
      //   ]
      // },
      // {
      //   id:3,
      //   image: colorMap3,
      //   childrens: [
      //     {
      //       id: 1,
      //       type: 'back',
      //       child: 3
      //     },
      //     {
      //       id: 2,
      //       type: 'front',
      //       child: 1
      //     },
      //   ]
      // },
      // {
      //   id: 4,
      //   image: colorMap4,
      //   childrens: [
      //     {
      //       id: 1,
      //       type: 'back',
      //       child: 0
      //     },
      //     {
      //       id: 2,
      //       type: 'front',
      //       child: 2
      //     },

      //   ],
      // },
      // {
      //   id:5,
      //   image:colorMap5,
      //   childrens:[
      //     {
      //       id:1,
      //       type:'back',
      //       child:2
      //     },
      //     {
      //       id:2,
      //       type:'right',
      //       child:1
      //     }
      //   ]
      // }
    ]
  )
  const [model, setModel] = useState(null)
  const [edit, setEdit] = useState(false)
  const [graph, setGraph] = useState(false)
  const [showLeftBar, setShowLeftBar] = useState(false)
  const [showRightBar, setShowRightBar] = useState(false)
  const [node, setNode] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selectedObjects, setSelectedObjects] = useState([])
  const [fov, setFov] = useState(60)
  const [rotate, setRotate] = useState(true)
  const [tools, setTools] = useState([
    {
      id: 1,
      type: 'rubber',
      icon:rubberIcon
    },
    {
      id: 2,
      type: 'cross',
      icon:selectorIcon
    },
    {
      id: 3,
      type: 'pen',
      icon:pencilIcon
    }
  ])
  const [tool, setTool] = useState(tools[1])
  const [position, setPosition] = useState([0.1, 0, 0])
  const [mouseEvents, setMouseEvents] = useState({
    clientX: 0,
    clientY: 0,
    clicking: false,
    offsetWidth: 0,
    offsetHeight: 0,
    startPositionX: 0,
    startPositionY: 0,

  });
  const [image, setImage] = useState(
    {
      image: {
        id: 1,
        value: '',
        error: '',
        placeholder: 'Image',
        validation: ['required'],
        type: 'file',
        valid: true
      }
    }
  )
  const [firstNodeChild, setFirstNodeChild] = useState(null)
  const [secondNodeChild, setSecondNodeChild] = useState(null)
const [sound , setSound] = useState(null)



  const deleteNode = (id) => {
    let newImages = images.filter(image => image.id != id)
    for (let i = 0; i < newImages.length; i++) {
      for (let j = 0; j < newImages[i].childrens.length; j++) {
        if (newImages[i].childrens[j].child == id) {
          newImages[i].childrens[j].child = null
        }
      }
    }
    setImages(newImages)
  }



  const setNodeChild = (nodeId, child, position) => {
    if (!child?.child) {
      if (firstNodeChild?.nodeId == nodeId && firstNodeChild?.child.id == child.id) {
        setFirstNodeChild(null)
      }
      else if (secondNodeChild?.nodeId == nodeId && secondNodeChild?.child.id == child.id) {
        setSecondNodeChild(null)
      }
      else if (!firstNodeChild) {
        setFirstNodeChild(
          {
            nodeId: nodeId,
            child: child,
            position: position
          }
        )
      }
      else if (!secondNodeChild) {
        setSecondNodeChild(
          {
            nodeId: nodeId,
            child: child
          }
        )
      }
    }
  }



  const connectNodes = () => {
    let newImages = [...images]

    let newFirstNode = newImages.find(image => image.id == firstNodeChild.nodeId)
    let newFirstNodeChild = newFirstNode.childrens.find(child => child.id == firstNodeChild.child.id)

    let newSecondNode = newImages.find(image => image.id == secondNodeChild.nodeId)
    let newSecondNodeChild = newSecondNode.childrens.find(child => child.id == secondNodeChild.child.id)

    newFirstNodeChild.child = secondNodeChild.nodeId
    newSecondNodeChild.child = firstNodeChild.nodeId
    setFirstNodeChild(null)
    setSecondNodeChild(null)
    setImages(newImages)
  }



  const disconnectNodes = (firstNode, secondNode) => {
    if (firstNode && secondNode) {
      let newImages = [...images]
      let newFirstNodeChild = null
      let newSecondNodeChild = null
      let newFirstNode = newImages.find(image => image.id == firstNode.id)
      if (newFirstNode) {
        newFirstNodeChild = newFirstNode.childrens.find(child => child.child == secondNode.id)
      }
      let newSecondNode = newImages.find(image => image.id == secondNode.id)
      if (newSecondNode) {
        newSecondNodeChild = newSecondNode.childrens.find(child => child.child == firstNode.id)
      }
      if (newFirstNodeChild) {
        newFirstNodeChild.child = null
      }
      if (newSecondNodeChild) {
        newSecondNodeChild.child = null
      }
      setImages(newImages)
    }
  }



  const save = async (fileName) => {
    const jsonData = JSON.stringify(images)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url;
    a.download = `${fileName}.json`
    await a.click()
    URL.revokeObjectURL(url)
    setModel(null)
  }



  const open = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = async (e) => {
      const jsonData = await JSON.parse(e.target.result)
      // setNodes(jsonData)
      setImages(jsonData)

    }
    if (file) {
      await reader.readAsText(file)
    }
  }



  const onChange = (nodeId, objectId, field, value) => {
    let newImages = [...images]
    let newNode = newImages.find(node => node.id == nodeId)
    if (newNode) {
      let newObject = newNode.objects.find(object => object.id == objectId)
      if (newObject) {
        newObject.fields[field].value = value
        setImages(newImages)
      }
    }
  }



  const toggleObjectFromSelection = (id) => {
    if (selectedObjects.find(objectId => objectId == id)) {
      const newSelectedObjects = selectedObjects.filter(objectId => objectId != id)
      setSelectedObjects(newSelectedObjects)
    }
    else {
      setSelectedObjects(prev => [...prev, id])
    }
  }



  const deleteObject = (nodeId, objectId) => {
    let newImages = [...images]
    let newNode = newImages.find(node => node.id == nodeId)
    if (newNode) {
      let newObjects = newNode.objects.filter(object => object.id != objectId)
      newNode.objects = newObjects
      setImages(newImages)
    }
  }



  const findMaxId = (list) => {
    let maxId = 1
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > maxId) {
        maxId = list[i].id
      }
    }
    return maxId
  }



  const findMax = (list) => {
    let maxId = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] > maxId) {
        maxId = list[i]
      }
    }
    return maxId
  }

const addObject = ( nodeId , object) => {
  let newImages = [...images]
  let newNode = newImages.find(node => node.id == nodeId)
  if(newNode){
    let newObject = {...object}
    newObject.id = findMaxId(newNode.objects) + 1
    newNode.objects = [...newNode.objects , newObject]
    setImages(newImages)
  }
}




  return (
    <AppContext.Provider value={{
      NODE,
      images,
      setImages,
      model,
      setModel,
      image,
      setImage,
      findMaxId,
      findMax,
      deleteNode,
      edit,
      setEdit,
      graph,
      setGraph,
      showLeftBar,
      setShowLeftBar,
      showRightBar,
      setShowRightBar,
      firstNodeChild,
      setFirstNodeChild,
      secondNodeChild,
      setSecondNodeChild,
      setNodeChild,
      connectNodes,
      disconnectNodes,
      save,
      open,
      node,
      setNode,
      position,
      setPosition,
      loading,
      setLoading,
      fov,
      setFov,
      tools,
      tool,
      setTool,
      mouseEvents,
      setMouseEvents,
      selectedObjects,
      setSelectedObjects,
      rotate,
      setRotate,
      toggleObjectFromSelection,
      onChange,
      objects,
      addObject,
      deleteObject,
      functions,
      sound,
      setSound

    }}>
      {children}
    </AppContext.Provider>
  )
}

export default StateProvider