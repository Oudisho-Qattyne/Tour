import React, { useContext, useEffect, useRef, useState } from 'react'
import Room from '../Room'
import { AppContext } from '../../AppState'
import { Image, Line, Text } from '@react-three/drei'
import { LinearFilter, NearestFilter, TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Node({ nodeg }) {
    const { images, setImages, setNodeChild, firstNodeChild, secondNodeChild, edit, tool, disconnectNodes, mouseEvents } = useContext(AppContext)
    const [node, setNode] = useState(null)
    const [map, setMap] = useState(null)
    const [direction , setDirection] = useState(null)
    const nodeRef = useRef()
    const xrRef = useRef(null)
    const yrRef = useRef(null)
    const zrRef = useRef(null)
    const xaRef = useRef(null)
    const yaRef = useRef(null)
    const zaRef = useRef(null)
    // useEffect(() => {
    //     const textureLoader = new TextureLoader()
    //     textureLoader.load(node?.image, texture => {
    //         texture.minFilter = NearestFilter
    //         texture.magFilter = NearestFilter
    //         texture.anisotropy = 1
    //         setMap(texture)
    //     })
    // }, [node?.image])

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
    useFrame(() => {
        if (mouseEvents.clicking && nodeRef) {

            switch (direction) {
                case 'xy':
                    nodeRef.current.position.x += (mouseEvents.clientX - mouseEvents.startPositionX) / 1000
                    nodeRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 1000
                    // xrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    // yrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    // zrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    // xaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    // yaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    // zaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    break;
       
                default:
                    break;

            }
        }
    }
    )
    useEffect(() => {
        if (!mouseEvents.clicking && nodeRef?.current) {
            setDirection(null)
            changePosition()
        }
    }, [mouseEvents.clicking])

    const changePosition = () => {
        let newImages = [...images]
        let newNode = newImages.find(node => node.id == nodeg)
        if (newNode && nodeRef) { 
                const newPosition =  [ nodeRef.current.position.y *-1, nodeRef.current.position.z  ,nodeRef.current.position.x *-1]
                newNode.position =newPosition
                setImages(newImages)
        }
    }
console.log(tool);

    return (
        node &&
        <>
            <mesh ref={nodeRef} onPointerDown={() => {
                if(edit && tool.type=='cross'){
                    setDirection('xy')
                }
                    }}  position={[node.position[2] * -1, node.position[0] * -1, node.position[1]]}>
                <planeGeometry args={[2, 1]} />
                {/* <meshBasicMaterial map={map} /> */}
            </mesh>
            {node.childrens.map(child => {
                if (edit || child.child)
                    return (
                        <mesh
                            onClick={() => {
                                if (tool.type == 'pen' && edit) {
                                    setNodeChild(node.id, child, node.position)
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
                                    if (tool.type == 'rubber' && edit && mouseEvents.clicking) {
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
