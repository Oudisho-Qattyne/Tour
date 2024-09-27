import React, { useContext, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, TransformControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Box from '../UI/Box.jsx'
import Room from '../UI/Room.jsx'
import { AppContext } from '../AppState.jsx'
import SelectImage from '../UI/SelectImage.jsx'



export default function View360() {
  const { image, setImage, setModel, images, setImages, NODE, deleteNode, edit, node, setNode , position , setFov , fov } = useContext(AppContext)
  const addNode = (firstNode, direction) => {
    setModel(<SelectImage firstNode={firstNode} direction={direction} />)
  }

  const [boxes, setBoxes] = useState([])

  const handleWheel = (e) => {
    setFov(prev => {
      if ((prev + e.deltaY / 100) > 60 || (prev + e.deltaY / 100) < 1) {
        return prev
      }
      else {
        return prev + e.deltaY / 100
      }
    })
  }

  const handleTouch = async (e) => {
    const ee = JSON.stringify(e)
    alert(ee  , 'jsjsj')
    
    const touches = e.touches
    if(touches.length == 2){
      alert(JSON.stringify(e.touches.length))
      const distance = Math.hypot(touches[0].clientX - touches[1].clientX , touches[0].clientY - touches[1].clientY)
      setFov(prev => {
        if ((prev + distance / 100) > 60 || (prev + distance / 100) < 1) {
          return prev
        }
        else {
          return prev + distance / 100
        }
      })
      
    }
  }


  useEffect(() => {
    const boxes = []

    if (node) {
      for (let i = 0; i < node.childrens.length; i++) {
        if (!edit) {
          if (node.childrens[i].child) {
            boxes.push(
              <Box rotation={node.childrens[i].direction.rotation} key={node.childrens[i].id} position={node.childrens[i].direction.location} onPress={() => {
                const newNode = images.find(nodeL => nodeL.id == node.childrens[i].child)

                setNode(newNode)
              }} />
            )
          }
        }
        else {
          if (!node.childrens[i].child) {
            boxes.push(
              <Box rotation={node.childrens[i].direction.rotation} key={node.childrens[i].id} position={node.childrens[i].direction.location} onPress={() => {
                addNode(node, node.childrens[i].direction)
              }} />
            )

          }
          else {
            boxes.push(
              <Box delete={true} rotation={node.childrens[i].direction.rotation} key={node.childrens[i].id} position={node.childrens[i].direction.location} onPress={() => {
                deleteNode(node.childrens[i].child)
              }} />
            )
          }
        }
      }
      setBoxes(boxes)
    }
  }, [node, edit, images])


  useEffect(() => {
    if (images.length > 0 && !node) {
      setNode(images[0])
    }
  }, [images])


  return (
    <div className='relative w-full h-full flex flex-row'>

      {

        node &&
        <Canvas onTouchMove={handleTouch} onWheel={handleWheel} className='relative w-full min-h-full'>
          <OrbitControls enablePan={false} enableZoom={false}   />
          <PerspectiveCamera makeDefault position={position} fov={60} />
          {
            boxes
          }
          <ambientLight intensity={1} />
          <Room image={node.image} />
        </Canvas>}

    </div>
  )
}
