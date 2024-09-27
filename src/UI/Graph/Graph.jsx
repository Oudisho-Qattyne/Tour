import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../AppState'
import { Line, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber";
import Room from '../Room';
import Node from './Node';

function Graph() {
  const { images, setImages, firstNodeChild, secondNodeChild, connectNodes, node, setMouseEvents, mouseEvents } = useContext(AppContext)
  const [nodes, setNodes] = useState(null)



  useEffect(() => {
    if (firstNodeChild?.nodeId && firstNodeChild?.child && secondNodeChild?.nodeId && secondNodeChild?.child) {
      connectNodes()
    }
  }, [firstNodeChild, secondNodeChild])


  useEffect(() => {
    let newNodes = []
    for (let i = 0; i < images.length; i++) {
      newNodes.push(<Node nodeg={images[i].id} />)
    }
    setNodes(newNodes)
  }, [])

  useEffect(() => {
    const handleMouseEvents = (event) => {
      switch (event.type) {
        case 'mousemove':
          setMouseEvents(prev => ({
            ...prev,
            clientX: event.clientX,
            clientY: event.clientY,
            offsetWidth : event.target.offsetWidth,
            offsetHeight : event.target.offsetHeight
          }))
          break;
        case 'mousedown':
          setMouseEvents(prev => ({
            ...prev,
            clicking: true
          }))
          break;
        case 'mouseup':
          setMouseEvents(prev => ({
            ...prev,
            clicking: false
          }))
          break;
        default:
          break;
      }
    };

    // Add event listeners for mouse events
    document.addEventListener('mousemove', handleMouseEvents);
    document.addEventListener('mousedown', handleMouseEvents);
    document.addEventListener('mouseup', handleMouseEvents);
    // document.addEventListener('click', handleMouseEvents);

    // Clean up event listeners
    return () => {
      // document.removeEventListener('mousemove', handleMouseEvents);
      document.removeEventListener('mousedown', handleMouseEvents);
      document.removeEventListener('mouseup', handleMouseEvents);
      // document.removeEventListener('click', handleMouseEvents);
    };
  }, []);


  return (
    <div  className='relative w-full h-full flex flex-row'>
      {
        images.length != 0 ?

          <Canvas className='relative w-full min-h-full'>
            <OrbitControls enableRotate={false} target={[node.position[2] * -1, node.position[0] * -1, node.position[1]]} />
            <PerspectiveCamera makeDefault position={[node.position[2] * -1, node.position[0] * -1, node.position[1] + 10]} />
            {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} /> */}
            <ambientLight intensity={0.1} />
            {
              nodes
            }
             {/* {
                firstNodeChild &&
                <Line
                    lineWidth={3}
                   
                    points={[
                        (firstNodeChild.child.direction.location[2] != 0 ? firstNodeChild.child.direction.location[2] > 0 ? firstNodeChild.position[2] * -1 - 1.25 : firstNodeChild.position[2] * -1 + 1.25 : firstNodeChild.position[2] * -1),
                        firstNodeChild.child.direction.location[0] != 0 ? firstNodeChild.child.direction.location[0] > 0 ? firstNodeChild.position[0] * -1 - 1.25 : firstNodeChild.position[0] * -1 + 1.25 : firstNodeChild.position[0] * -1,
                        firstNodeChild.child.direction.location[1] + 0.4 != 0 ? firstNodeChild.child.direction.location[1] + 0.4 > 0 ? firstNodeChild.position[1] - 1.25 : firstNodeChild.position[1] + 1.25 : firstNodeChild.position[1]
                        , 
                    [mouseEvents.clientX - mouseEvents.offsetWidth/2 , -mouseEvents.clientY + mouseEvents.offsetHeight/2 , 0]
                    ]} />
            } */}
          </Canvas>
          :
          <p className='relative text-[#121212] text-center text-lg py-4'>No Nodes To Show</p>

      }

    </div>
  )
}

export default Graph