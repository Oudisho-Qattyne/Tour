import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../AppState'
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import Room from '../Room';
import Node from './Node';

function Graph() {
  const { images, setImages ,firstNodeChild,secondNodeChild,connectNodes , node } = useContext(AppContext)
  const [nodes, setNodes] = useState(null)



useEffect(() => {
  if(firstNodeChild?.nodeId && firstNodeChild?.child &&  secondNodeChild?.nodeId && secondNodeChild?.child){
    connectNodes()
  }
} , [firstNodeChild , secondNodeChild])


  useEffect(() => {
      let newNodes = []
      for (let i = 0; i < images.length; i++) {
        newNodes.push(<Node nodeg={images[i].id} />)
      }
      setNodes(newNodes)
  }, [])
console.log(node.position);

  return (
    <div className='relative w-full h-full flex flex-row'>

      {
        images.length != 0  ?

        <Canvas className='relative w-full min-h-full'>
          <OrbitControls target={[node.position[2] * -1, node.position[0] * -1, node.position[1]]} />
          <PerspectiveCamera makeDefault position={[node.position[2] * -1, node.position[0] * -1, node.position[1]+10]}/>
          {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} /> */}
          <ambientLight intensity={0.1} />
          {
            nodes
          }
        </Canvas>
        :
        <p className='relative text-[#121212] text-center text-lg py-4'>No Nodes To Show</p>

      }

    </div>
  )
}

export default Graph