import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../AppState'
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import Room from '../Room';
import Node from './Node';

function Graph() {
  const { images, setImages, nodes, setNodes , scale ,firstNodeChild,
    setFirstNodeChild,
    secondNodeChild,
    setSecondNodeChild ,connectNodes } = useContext(AppContext)
  const [node, setNode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [width, setWidth] = useState(0)
  const [height , setHieght] = useState(0)
  const SvgRef = useRef()
  useEffect(() => {
    const nodes = images.map(image => ({ ...image, visited: false }))
    setNodes(nodes)
  }, [images])

  // useEffect(() => {
  //   if (SvgRef?.current?.offsetWidth) {
  //     setWidth(SvgRef?.current?.offsetWidth)
  //     setHieght(SvgRef?.current?.offsetHeight)
      
  //   }
  // }, [SvgRef?.current?.offsetWidth , SvgRef?.current?.offsetHeight])



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
      setNode(newNodes)
  }, [])
  return (
    <div ref={SvgRef} className='relative w-full h-full flex flex-row'>

      {

        nodes[0] &&
        // <svg  className='relative w-full min-h-full '>
        //   {
        //     node
        //   }
        // </svg>
        <Canvas className='relative w-full min-h-full'>
          <OrbitControls target={[0, 0, 0]} />
          {/* <PerspectiveCamera makeDefault position={[0.1, 1, 1]} /> */}
          <OrthographicCamera position={[0, 0, 10]} zoom={10} />

          <ambientLight intensity={0.1} />
          {
            node
          }
          {/* <Node nodeg={nodes[0].id}  /> */}
        </Canvas>
      }

    </div>
  )
}

export default Graph