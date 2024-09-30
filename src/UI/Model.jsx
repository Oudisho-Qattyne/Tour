import React, { useContext } from 'react'

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshBasicMaterial } from 'three';
import { AppContext } from '../AppState';

export default function Model() {
const { model , setModel} = useContext(AppContext)

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center '>
      <div onClick={() => setModel(null)} className='absolute min-w-full h-full  backdrop-blur-md' />
      <div className='relative w-1/2 max-h-[90%] min-h-[300px] bg-[#121212] rounded-xl overflow-y-scroll scrollbar-hide shadow-md p-2'>
        {
          model
        }
      </div>
    </div>
  )

}
