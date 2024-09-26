import React, { useContext, useEffect, useState } from 'react'
import Room from '../Room'
import { AppContext } from '../../AppState'
import { Image, Line, Text } from '@react-three/drei'
import { LinearFilter, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

export default function Node({ nodeg }) {
    const { images, setImages , setNodeChild , firstNodeChild , secondNodeChild, edit } = useContext(AppContext)
    const [node, setNode] = useState(null)

    let map = null
    if (node?.image) {
        map = useLoader(TextureLoader, node?.image)
    }

    useEffect(() => {
        let newNodes = [...images]
        let newNode = newNodes.find(nodeL => nodeL.id == nodeg)
        if (newNode) {
            newNode.visited = true
            setNode(newNode)
            setImages(newNodes)
        }
    }, [])


    return (
        node &&
        <>
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
                        const image = images.find(node => node.id == child.child)
                        const imageChild = image.childrens.find(childL => childL.child == node.id)
                        
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
        </>
    )
}
