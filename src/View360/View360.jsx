import React, { useContext, useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Box from '../UI/Box.jsx'
import Room from '../UI/Room.jsx'
import { AppContext } from '../AppState.jsx'
import SelectImage from '../UI/SelectImage.jsx'



export default function View360() {
  const { image, setImage, setModel, images, setImages, NODE, deleteNode , edit } = useContext(AppContext)

  const addNode = (firstNode, direction) => {
    setModel(<SelectImage firstNode={firstNode} direction={direction} />)
  }

  const [node, setNode] = useState(null)
  const [boxes, setBoxes] = useState([])



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
                // console.log(node.childrens[i].child);

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
  console.log(images);
  console.log(node);


  return (
    <div className='relative w-full h-full flex flex-row'>

     {
     
          node &&
          <Canvas className='relative w-full min-h-full'>
            <OrbitControls target={[0, 0, 0]} />
            <PerspectiveCamera makeDefault position={[0.1, 0, 0]} />
            {
              boxes
            }
            <ambientLight intensity={1} />
            <Room image={node.image} />
          </Canvas>}
      
    </div>
  )
}
