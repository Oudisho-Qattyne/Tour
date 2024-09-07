import React, { createContext, useState } from 'react'
import Input from './UI/Input/Input'
import i1 from './assets/11png.png'
import i2 from './assets/12.jpg'
import { BACK, BACK_LEFT, BACK_RIGTH, BOTTOM, BOTTOM_BACK, BOTTOM_BACK_LEFT, BOTTOM_BACK_RIGTH, BOTTOM_FRONT, BOTTOM_FRONT_LEFT, BOTTOM_FRONT_RIGTH, BOTTOM_LEFT, BOTTOM_RIGHT, FRONT, FRONT_LEFT, FRONT_RIGHT, LEFT, RIGHT, TOP, TOP_BACK, TOP_BACK_LEFT, TOP_BACK_RIGHT, TOP_FRONT, TOP_FRONT_LEFT, TOP_FRONT_RIGTH, TOP_LEFT, TOP_RIGHT } from './Constants/CONSTANTS.js'

export const AppContext = createContext()

export const StateProvider = ({ children }) => {

  let NODE = {
    id: 1,
    image: i2,
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
      {
        id: 9,
        direction: TOP,
        child: null
      },
      {
        id: 10,
        direction: TOP_FRONT,
        child: null
      },
      {
        id: 11,
        direction: TOP_FRONT_RIGTH,
        child: null
      },
      {
        id: 12,
        direction: TOP_FRONT_LEFT,
        child: null
      },
      {
        id: 13,
        direction: TOP_BACK,
        child: null
      },
      {
        id: 14,
        direction: TOP_BACK_RIGHT,
        child: null
      },
      {
        id: 15,
        direction: TOP_BACK_LEFT,
        child: null
      },
      {
        id: 16,
        direction: TOP_RIGHT,
        child: null
      },
      {
        id: 17,
        direction: TOP_LEFT,
        child: null
      },
      {
        id: 18,
        direction: BOTTOM,
        child: null
      },
      {
        id: 19,
        direction: BOTTOM_FRONT,
        child: null
      },
      {
        id: 20,
        direction: BOTTOM_FRONT_RIGTH,
        child: null
      },
      {
        id: 21,
        direction: BOTTOM_FRONT_LEFT,
        child: null
      },
      {
        id: 22,
        direction: BOTTOM_BACK,
        child: null
      },
      {
        id: 23,
        direction: BOTTOM_BACK_RIGTH,
        child: null
      },
      {
        id: 24,
        direction: BOTTOM_BACK_LEFT,
        child: null
      },
      {
        id: 25,
        direction: BOTTOM_RIGHT,
        child: null
      },
      {
        id: 26,
        direction: BOTTOM_LEFT,
        child: null
      },
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
  const [model, setModel] = useState(null)

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
      deleteNode
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default StateProvider