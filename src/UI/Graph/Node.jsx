import React, { useContext, useEffect, useState } from 'react'
import Room from '../Room'
import { AppContext } from '../../AppState'
import { Image, Line, Text } from '@react-three/drei'
import { LinearFilter, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

export default function Node({ nodeg }) {
    const { nodes, setNodes, setNodeChild, firstNodeChild,
        setFirstNodeChild,
        secondNodeChild,
        setSecondNodeChild, edit} = useContext(AppContext)
    const [node, setNode] = useState(null)
    const [childrens, setChildrens] = useState([])
    let map = null
    if (node?.image) {
        map = useLoader(TextureLoader, node?.image)
    }
    useEffect(() => {
        let newNodes = [...nodes]
        let newNode = newNodes.find(nodeL => nodeL.id == nodeg)
        if (newNode && !newNode.visited) {
            // let childrens = newNode.childrens.map(child => {
            //     return (
            //         // <circle r={10} fill='#FFFFFF' cx={(-position[2]*width * scale + width/2 - 1/8 * width/2 *scale) + child.direction.location[2]} cy={((position[0] - position[1])*height * scale + height/2 - 1/16 * width/2 *scale) + (child.direction.location[0]-child.direction.location[1])} />
            //         // <circle r={5} fill='#FFFFFF' cx={(-newNode.position[2]*width * scale + width/2 + child.direction.location[2]* 1/8 * width * scale)} cy={((newNode.position[0] - newNode.position[1])*height * scale + height/2 + (child.direction.location[0] - child.direction.location[1])*1/8 * width * scale )} />
            //         <mesh position={[
            //             child.direction.location[2] != 0 ? newNode.position[0] + 1 : 0,
            //             child.direction.location[0] != 0 ? newNode.position[1] + 1 : 0,
            //             child.direction.location[1] + 0.4 != 0 ? newNode.position[2] + 1 : 0,
            //         ]}>
            //             <planeGeometry args={[0.5, 0.5]} />
            //             <meshBasicMaterial color={'#FFFFFF'} />

            //         </mesh>
            //     )
            // })
            newNode.visited = true
            setNode(newNode)
            setNodes(newNodes)
            // setChildrens(childrens)
        }
    }, [])

    console.log(firstNodeChild, secondNodeChild);

    return (
        node &&
        <>
            {/* <mesh position={[]}>
          <sphereGeometry args={[0.02, 16, 16]}  />
                
            </mesh> */}
            {/* <svg x={(-position[2]*width * scale + width/2 - 1/8 * width/2 *scale) + ''} y={((position[0] - position[1])*height * scale + height/2 - 1/16 * width/2 *scale) + ''}> */}
            {/* {node.childrens.map(child => {
                return(
                    // <circle r={10} fill='#FFFFFF' cx={(-position[2]*width * scale + width/2 - 1/8 * width/2 *scale) + child.direction.location[2]} cy={((position[0] - position[1])*height * scale + height/2 - 1/16 * width/2 *scale) + (child.direction.location[0]-child.direction.location[1])} />
                    <circle r={5} fill='#FFFFFF' cx={(-position[2]*width * scale + width/2 + child.direction.location[2]* 1/8 * width * scale)} cy={((position[0] - position[1])*height * scale + height/2 + (child.direction.location[0] - child.direction.location[1])*1/8 * width * scale )} />
                )
            })}
            <image width={1/8 * width * scale} height={1/16 * width * scale} radius='100%' href={node.image} preserveAspectRatio="xMidYMid slice" x={(-position[2]*width * scale + width/2 - 1/8 * width/2 *scale) + ''} y={((position[0] - position[1])*height * scale + height/2 + 1/32 * width/2 *scale) + ''} /> */}
            {/* </svg> */}
            {/* <Image  texture={node.image} width={1/8 * width * scale} height={1/16 * width * scale} args={[10, 10]} position={position}/> */}
            <mesh position={[node.position[2] * -1, node.position[0] * -1, node.position[1]]}>
                <planeGeometry args={[2, 1]} />
                {/* <meshBasicMaterial map={map} /> */}
            </mesh>
            {node.childrens.map(child => {
                if(edit || child.child)
                return (
                    <mesh onClick={() => setNodeChild(node.id, child)} position={[
                        child.direction.location[2] != 0 ? child.direction.location[2] > 0 ? node.position[2] * -1 - 1.25 : node.position[2] * -1 + 1.25 : node.position[2] * -1,
                        child.direction.location[0] != 0 ? child.direction.location[0] > 0 ? node.position[0] * -1 - 1.25 : node.position[0] * -1 + 1.25 : node.position[0] * -1,
                        child.direction.location[1] + 0.4 != 0 ? child.direction.location[1] + 0.4 > 0 ? node.position[1] - 1.25 : node.position[1] + 1.25 : node.position[1],
                    ]}>
                        <circleGeometry args={[0.1, 100]} />
                        <meshBasicMaterial color={child.child ? '#FF0000' : (firstNodeChild?.child.id == child.id && node.id == firstNodeChild.nodeId) ? '#00FF00' : (secondNodeChild?.child.id == child.id && node.id == secondNodeChild.nodeId) ? '#0000FF' : '#FFFFFF'} />

                    </mesh>
                )
            })}
            {
                node.childrens.map(child => {
                    if (child.child) {
                        const startPoint = [
                            child.direction.location[2] != 0 ? child.direction.location[2] > 0 ? node.position[2] * -1 - 1.25 : node.position[2] * -1 + 1.25 : node.position[2] * -1,
                            child.direction.location[0] != 0 ? child.direction.location[0] > 0 ? node.position[0] * -1 - 1.25 : node.position[0] * -1 + 1.25 : node.position[0] * -1,
                            child.direction.location[1] + 0.4 != 0 ? child.direction.location[1] + 0.4 > 0 ? node.position[1] - 1.25 : node.position[1] + 1.25 : node.position[1]
                        ]
                        const image = nodes.find(node => node.id == child.child)
                        const imageChild = image.childrens.find(childL => childL.child == node.id)
                        console.log(image , imageChild , node.id , imageChild.child);
                        
                        const endPoint = [
                            imageChild.direction.location[2] != 0 ? imageChild.direction.location[2] > 0 ? image.position[2] * -1 - 1.25 : image.position[2] * -1 + 1.25 : image.position[2] * -1,
                            imageChild.direction.location[0] != 0 ? imageChild.direction.location[0] > 0 ? image.position[0] * -1 - 1.25 : image.position[0] * -1 + 1.25 : image.position[0] * -1,
                            imageChild.direction.location[1] + 0.4 != 0 ? imageChild.direction.location[1] + 0.4 > 0 ? image.position[1] - 1.25 : image.position[1] + 1.25 : image.position[1]
                        ]
                        return (
                            <Line points={[startPoint , endPoint]}/>
                        )
                    }
                }
                )
            }
            {/* {
                node.childrens &&
                node.childrens.map(node => {
                    if (node.child) {
                        return (
                            <Node nodeg={node.child} direction={node.direction} width={width} height={height} scale={scale} />
                        )
                    }
                })
            } */}
        </>
    )
}
