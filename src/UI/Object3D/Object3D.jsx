import { Line } from '@react-three/drei';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../AppState';
import { useFrame } from '@react-three/fiber';
import { Euler } from 'three';
import Cube from './ObjectTypes/Cube';
import Sphere from './ObjectTypes/Sphere';
import TextObject from './ObjectTypes/TextObject';

function Object3D(props) {

    const { images, setImages, selectedObjects, mouseEvents, setRotate, setSelectedObjects, edit, findMax , setSound , setNode} = useContext(AppContext)
    const [object, setObject] = useState(null)
    const [direction, setDirection] = useState(null)
    const objectRef = useRef(null)
    const xrRef = useRef(null)
    const yrRef = useRef(null)
    const zrRef = useRef(null)
    const xaRef = useRef(null)
    const yaRef = useRef(null)
    const zaRef = useRef(null)
    useEffect(() => {

        switch (props.type) {
            case 'pointLight':
                setObject(
                    <pointLight intensity={props.fields.intensity.value} />
                )
                break;
            case 'cube':
                setObject(
                    <Cube {...props} />
                )
                break;
            case 'sphere':
                setObject(
                    <Sphere {...props} />
                )
                break;
            case 'text':
                setObject(
                    <TextObject {...props} />
                )
                break;
            default:
                break;
        }
        // if(objectRef){
        //     objectRef.current.rotation.x = props.rotationX
        //     objectRef.current.rotation.y = props.rotationY
        //     objectRef.current.rotation.z = props.rotationZ
        // }
    }, [props])

    useFrame(() => {
        if (mouseEvents.clicking && objectRef) {

            switch (direction) {
                case 'x':
                    objectRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    xrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    yrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    zrRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    xaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    yaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    zaRef.current.position.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    break;
                case 'y':
                    objectRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    xrRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    yrRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    zrRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    xaRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    yaRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    zaRef.current.position.y -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    break;
                case 'z':
                    objectRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    xrRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    yrRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    zrRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    xaRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    yaRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    zaRef.current.position.z -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    break;
                case 'rotateX':
                    objectRef.current.rotation.x -= (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    break;
                case 'rotateY':
                    objectRef.current.rotation.y += (mouseEvents.clientX - mouseEvents.startPositionX) / 10000
                    break;
                case 'rotateZ':
                    objectRef.current.rotation.z -= (mouseEvents.clientY - mouseEvents.startPositionY) / 10000
                    break;
                default:
                    break;

            }
        }
    })

    useEffect(() => {
        if (!mouseEvents.clicking) {
            setRotate(true)
            setDirection(null)
            changePosition()
        }
    }, [mouseEvents.clicking])

    const changePosition = () => {
        let newImages = [...images]
        let newNode = newImages.find(node => node.id == props.nodeId)
        if (newNode) {
            let newObject = newNode?.objects?.find(object => object.id == props.id)
            if (newObject && objectRef) {
                newObject.fields.position.value = [objectRef.current.position.x, objectRef.current.position.y, objectRef.current.position.z]
                newObject.fields.rotationX.value = objectRef.current.rotation.x
                newObject.fields.rotationY.value = objectRef.current.rotation.y
                newObject.fields.rotationZ.value = objectRef.current.rotation.z

                setImages(newImages)
            }
        }
    }
    // useFrame(() => {
    //     if(r.current)
    //     r.current.rotation.y += 0.01;
    // })

        // const playSound = () => {
        //   const audio = new Audio('sound.m4a');
        //   audio.play();
        // };
    const onPress = () => {
        console.log(props.fields.functionality.value);
        props.fields.functionality.value.map(func => {
            switch (func.name) {
                case 'play-sound':
                    setSound(func.sound)
                    break;
                case 'show-object':
                    let newNodes = [...images]
                    let newNode = newNodes.find(node => node.id == props.nodeId )
                    if(newNode) {
                        let newObj = newNode.objects.find(obj => obj.id == func.objectId)
                        if(newObj){
                            newObj.fields.visible.value = !newObj.fields.visible.value 
                            setImages(newNodes)
                        }
                    }
                    break;
                    case 'move-to-node':
                        const node = images.find(node => node.id == func.nodeId)
                        if(node){
                            setNode(node)
                        }
                        break;
                default:
                    break;
            }
        })
        
    }


    
    return (

        <>
            <mesh onPointerDown={() => {
                if (edit) {
                    setSelectedObjects(prev => [...prev, props.id])
                    // toggleObjectFromSelection(props.id)
                }
                else{
                    onPress()
                }
            }} castShadow receiveShadow ref={objectRef} rotation-x={props.fields.rotationX.value} rotation-y={props.fields.rotationY.value} rotation-z={props.fields.rotationZ.value} position={props.fields.position.value} >
                {
                    props.fields.visible.value &&
                    object
                }
            </mesh>
            {
                selectedObjects.find(objectId => objectId == props.id) && edit && props.fields.visible.value &&
                <>
                    <mesh castShadow receiveShadow position={props.fields.position.value} ref={zaRef} onPointerDown={() => {
                        setDirection('z')
                        setRotate(false)
                    }}>

                        <boxGeometry args={[0.01, 0.01, 1]} />
                        <meshBasicMaterial color="red" />

                    </mesh>
                    <mesh castShadow receiveShadow position={props.fields.position.value} ref={yaRef} onPointerDown={() => {
                        setDirection('y')
                        setRotate(false)
                    }} >
                        <boxGeometry args={[0.01, 1, 0.01]} />
                        <meshBasicMaterial color="blue" />
                    </mesh>
                    <mesh castShadow receiveShadow position={props.fields.position.value} ref={xaRef} onPointerDown={() => {
                        setDirection('x')
                        setRotate(false)
                    }}>

                        <boxGeometry args={[1, 0.01, 0.01]} />
                        <meshBasicMaterial color="green" />

                    </mesh>
                    <mesh castShadow receiveShadow ref={zrRef} position={props.fields.position.value} onPointerDown={() => {
                        setRotate(false)
                        setDirection('rotateZ')
                    }}>
                        <torusGeometry args={props.fields?.args?.value ? props.type == 'sphere' ? [props.fields.args.value[0], 0.005, 3, 100] : [findMax(props.fields.args.value), 0.005, 3, 100] : [0.1, 0.005, 3, 100]} />
                        <meshBasicMaterial color="red" />
                    </mesh>
                    <mesh castShadow receiveShadow ref={xrRef} position={props.fields.position.value} onPointerDown={() => {
                        setRotate(false)
                        setDirection('rotateX')
                    }} rotation={new Euler(0, Math.PI / 2, 0)} >
                        <torusGeometry args={props.fields?.args?.value ? props.type == 'sphere' ? [props.fields.args.value[0], 0.005, 3, 100] : [findMax(props.fields.args.value), 0.005, 3, 100] : [0.1, 0.005, 3, 100]} />
                        <meshBasicMaterial color="green" />
                    </mesh>
                    <mesh castShadow receiveShadow ref={yrRef} position={props.fields.position.value} onPointerDown={() => {
                        setRotate(false)
                        setDirection('rotateY')
                    }} rotation={new Euler(Math.PI / 2, 0, 0)} >
                        <torusGeometry args={props.fields?.args?.value ? props.type == 'sphere' ? [props.fields.args.value[0], 0.005, 3, 100] : [findMax(props.fields.args.value), 0.005, 3, 100] : [0.1, 0.005, 3, 100]} />
                        <meshBasicMaterial color="blue" />
                    </mesh>
                </>
            }
        </>
    )
}

export default Object3D