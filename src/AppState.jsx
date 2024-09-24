import React, { createContext, useState } from 'react'
import { BACK, BACK_LEFT, BACK_RIGTH, BOTTOM, BOTTOM_BACK, BOTTOM_BACK_LEFT, BOTTOM_BACK_RIGTH, BOTTOM_FRONT, BOTTOM_FRONT_LEFT, BOTTOM_FRONT_RIGTH, BOTTOM_LEFT, BOTTOM_RIGHT, FRONT, FRONT_LEFT, FRONT_RIGHT, LEFT, RIGHT, TOP, TOP_BACK, TOP_BACK_LEFT, TOP_BACK_RIGHT, TOP_FRONT, TOP_FRONT_LEFT, TOP_FRONT_RIGTH, TOP_LEFT, TOP_RIGHT } from './Constants/CONSTANTS.js'
import fs from 'fs'
export const AppContext = createContext()

export const StateProvider = ({ children }) => {

  let NODE = {
    id: 1,
    image: null,
    position: [0, 0, 0],
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
  const findMaxId = (list) => {
    let maxId = 1
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > maxId) {
        maxId = list[i].id
      }
    }
    return maxId
  }
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
  const [nodes, setNodes] = useState([])
  const [model, setModel] = useState(null)
  const [edit, setEdit] = useState(false)
  const [graph, setGraph] = useState(false)
  const [showLeftBar, setShowLeftBar] = useState(false)
  const [showRightBar, setShowRightBar] = useState(false)
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

  // const onChange = (e , type , field) => {
  //     switch (type) {
  //         case 'file':
  //             setImage(prev => ({
  //                 ...prev,
  //                 value : URL.createObjectURL(e.target.files[0])
  //             }))
  //             break;

  //         default:
  //             break;
  //     }
  // }

  const setNodeChild = (nodeId, child) => {
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
            child: child
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

    let newFirstNode = newImages.find(image => image.id==firstNodeChild.nodeId)
    let newFirstNodeChild = newFirstNode.childrens.find(child => child.id == firstNodeChild.child.id)

    let newSecondNode = newImages.find(image => image.id==secondNodeChild.nodeId)
    let newSecondNodeChild = newSecondNode.childrens.find(child => child.id == secondNodeChild.child.id)

    newFirstNodeChild.child = secondNodeChild.nodeId
    newSecondNodeChild.child = firstNodeChild.nodeId
    setFirstNodeChild(null)
    setSecondNodeChild(null)
    setImages(newImages)
  }

  const save = async () => {
    const jsonData = JSON.stringify(nodes)
    const blob = new Blob([jsonData] , {type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url;
    a.download = 'ST-Elian.json'
    a.click()
   URL.revokeObjectURL(url)
  }


  const open = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload =  async  (e) => {
      const jsonData = await JSON.parse(e.target.result)
      console.log(jsonData);
      // setNodes(jsonData)
      setImages(jsonData)
      
    }
    if(file){
      await reader.readAsText(file)
    }
  }
  const [scale, setScale] = useState(0.5)

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
      deleteNode,
      edit,
      setEdit,
      graph,
      setGraph,
      showLeftBar,
      setShowLeftBar,
      showRightBar,
      setShowRightBar,
      nodes,
      setNodes,
      scale,
      setScale,
      firstNodeChild,
      setFirstNodeChild,
      secondNodeChild,
      setSecondNodeChild,
      setNodeChild,
      connectNodes,
      save,
      open
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default StateProvider