import React, { useContext, useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Box from '../UI/Box.jsx'
import Room from '../UI/Room.jsx'
import { AppContext } from '../AppState.jsx'
import SelectImage from '../UI/SelectImage.jsx'



export default function View360() {
  const { image, setImage, setModel, images, setImages, NODE, deleteNode, edit, node, setNode } = useContext(AppContext)
  const [fov, setFov] = useState(60)
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
        <Canvas onWheel={handleWheel} className='relative w-full min-h-full'>
          <OrbitControls enablePan={false} enableZoom={false} target={[0, 0, 0]} />
          <PerspectiveCamera makeDefault position={[0.1, 0, 0]} fov={fov} />
          {
            boxes
          }
          <ambientLight intensity={1} />
          <Room image={node.image} />
        </Canvas>}

    </div>
  )
}
