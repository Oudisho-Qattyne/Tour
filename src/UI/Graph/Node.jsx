import React, { useContext, useEffect, useState } from 'react'
import Room from '../Room'
import { AppContext } from '../../AppState'
import { Image, Line, Text } from '@react-three/drei'
import { LinearFilter, NearestFilter, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

export default function Node({ nodeg }) {
    const { images, setImages, setNodeChild, firstNodeChild, secondNodeChild, edit, tool, disconnectNodes , mouseEvents } = useContext(AppContext)
    const [node, setNode] = useState(null)
    const [map, setMap] = useState(null)
    // const textureLoader = new TextureLoader()
    // textureLoader.load(node?.image, texture => {
    //   texture.minFilter = NearestFilter
    //   texture.magFilter = NearestFilter
    //   texture.anisotropy = 1
    //   setMap(texture)
    // })

    useEffect(() => {
        if (images) {

            let newNodes = [...images]
            let newNode = newNodes.find(nodeL => nodeL.id == nodeg)
            if (newNode) {
                newNode.visited = true
                setNode(newNode)
                setImages(newNodes)
            }
        }
    }, [images])


    return (
        node &&
        <>
            <mesh position={[node.position[2] * -1, node.position[0] * -1, node.position[1]]}>
                <planeGeometry args={[2, 1]} />
                {/* <meshBasicMaterial map={map} /> */}
            </mesh>
            {node.childrens.map(child => {
                if (edit || child.child)
                    return (
                        <mesh
                            onClick={() => {
                                if (tool.type == 'pen' && edit) {
                                    setNodeChild(node.id, child , node.position)
                                }
                            }}
                            position={[
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
                        let startPoint = [0, 0, 0]
                        let endPoint = [0, 0, 0]
                        let image = images.find(node => node.id == child.child)
                        startPoint = [
                            (child.direction.location[2] != 0 ? child.direction.location[2] > 0 ? node.position[2] * -1 - 1.25 : node.position[2] * -1 + 1.25 : node.position[2] * -1),
                            child.direction.location[0] != 0 ? child.direction.location[0] > 0 ? node.position[0] * -1 - 1.25 : node.position[0] * -1 + 1.25 : node.position[0] * -1,
                            child.direction.location[1] + 0.4 != 0 ? child.direction.location[1] + 0.4 > 0 ? node.position[1] - 1.25 : node.position[1] + 1.25 : node.position[1]
                        ]
                        if (images) {
                            if (image) {
                                const imageChild = image.childrens.find(childL => childL.child == node.id)
                                if (imageChild) {
                                    endPoint = [
                                        (imageChild.direction.location[2] != 0 ? imageChild.direction.location[2] > 0 ? image.position[2] * -1 - 1.25 : image.position[2] * -1 + 1.25 : image.position[2] * -1),
                                        imageChild.direction.location[0] != 0 ? imageChild.direction.location[0] > 0 ? image.position[0] * -1 - 1.25 : image.position[0] * -1 + 1.25 : image.position[0] * -1,
                                        imageChild.direction.location[1] + 0.4 != 0 ? imageChild.direction.location[1] + 0.4 > 0 ? image.position[1] - 1.25 : image.position[1] + 1.25 : image.position[1]
                                    ]
                                }
                            }
                        }
                        return (
                            <Line 
                            onPointerEnter={() => {
                                if(tool.type == 'rubber' && edit && mouseEvents.clicking){
                                    disconnectNodes(node, image)
                                }
                            }}
                                lineWidth={5}
                                onClick={() => {
                                    if (tool.type == 'rubber' && edit) {
                                        disconnectNodes(node, image)
                                    }
                                }}
                                points={[startPoint, endPoint]} />
                        )
                    }
                }
                )
            }
        </>
    )
}
