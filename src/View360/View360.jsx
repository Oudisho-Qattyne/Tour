import React, { useContext, useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Box from '../UI/Box.jsx'
import Room from '../UI/Room.jsx'
import { AppContext } from '../AppState.jsx'
import SelectImage from '../UI/SelectImage.jsx'



export default function View360() {
  const { image, setImage, setModel, images, setImages, NODE, deleteNode } = useContext(AppContext)

  const addNode = (firstNode, direction) => {
    setModel(<SelectImage firstNode={firstNode} direction={direction} />)
  }

  const [node, setNode] = useState(null)
  const [boxes, setBoxes] = useState([])
  const [edit, setEdit] = useState(false)
  const [graph, setGraph] = useState(false)
  const [showLeftBar, setShowLeftBar] = useState(false)
  const [showRightBar, setShowRightBar] = useState(false)


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

      <div className='absolute top-0 w-[15%] h-full bg-[#C1C1C1] z-10' style={{ left: showLeftBar ? '0' : '-15%' }}>
        <div onClick={() => setShowLeftBar(prev => !prev)} className='absolute top-1/2 -right-6 w-6 h-20 bg-[#C1C1C1] rounded-tr-lg rounded-br-lg hover:cursor-pointer'>

        </div>
      </div>

      <div className='absolute  top-0 w-[15%] h-full bg-[#C1C1C1] z-10' style={{ right: showRightBar ? '0' : '-15%' }}>
        <div onClick={() => setShowRightBar(prev => !prev)} className='absolute top-1/2 -left-6 w-6 h-20 bg-[#C1C1C1] rounded-tl-lg rounded-bl-lg hover:cursor-pointer'>

        </div>
        <div className='absolute  bottom-10 -left-24 flex flex-row justify-center items-center'>

          <div onClick={() => setEdit(prev => !prev)} className='relative bg-[#C1C1C1] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10'>
            {edit ?
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                Show
              </p>
              :
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                Edit
              </p>
            }
          </div>
          <div onClick={() => setGraph(prev => !prev)} className='relative bg-[#C1C1C1] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10'>
            {graph ?
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                360
              </p>
              :
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                Graph
              </p>
            }
          </div>
        </div>
      </div>


      {
        images.length == 0 ?
          <div className='relative w-full h-full flex flex-col justify-center items-center'>
            <p className='relative text-center text-[#ffffff] text-3xl'>No Photo, Please Enter The First Node</p>
            <button onClick={() => {
              setModel(<SelectImage />)
            }} className='relative w-[200px] flex justify-center items-center rounded-full bg-white my-4'>
              <p className='relative text-[#121212] text-center text-lg py-4'>Select Image</p>
            </button>
          </div>
          :
          node &&
          <Canvas className='relative w-screen h-screen'>
            <OrbitControls target={[0, 0, 0]} />
            <PerspectiveCamera makeDefault position={[0.1, 0, 0]} />
            <TransformControls/>
            {
              boxes
            }
            <ambientLight intensity={1} />
            <Room image={node.image} />
          </Canvas>
      }
    </div>
  )
}
