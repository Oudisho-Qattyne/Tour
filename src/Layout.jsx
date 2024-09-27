import React, { useContext, useRef, useState } from 'react'
import View360 from './View360/View360'
import Model from './UI/Model'
import { AppContext } from './AppState'
import Graph from './UI/Graph/Graph'
import SelectImage from './UI/SelectImage'
import SaveProject from './UI/SaveProject'
function Layout() {
  const { model, setModel, setEdit, edit, showLeftBar, setShowLeftBar, graph, setGraph, images, open, setNode, node, tools , setTool , tool } = useContext(AppContext)



  return (
    <div className="realtive w-screen h-screen flex justify-center items-center overflow-hidden ">

      <div className='fixed  w-[15%] h-full bg-[#C1C1C1] z-40 ' style={{ left: showLeftBar ? '0' : '-15%' }}>
        <div className='relative w-full h-full overflow-scroll scrollbar-hide '>
        
          {
            images.length == 0 ?
              <p className='relative text-[#121212] text-center text-lg py-4'>No Nodes To Show</p>

              :
              images.map(nodeL =>
                <div onClick={() => setNode(nodeL)} className='relative w-full flex-row justify-center items-center p-1 border border-b-2 cursor-pointer ' style={{ background: nodeL?.id == node?.id ? '#707070' : '#C1C1C1' }}>
                  <img src={nodeL.image} className='relative w-1/2 aspect-video' />
                </div>
              )
          }
        </div>
        <div onClick={() => setShowLeftBar(prev => !prev)} className='absolute top-1/2 -right-6 w-6 h-20 bg-[#C1C1C1] rounded-tr-lg rounded-br-lg hover:cursor-pointer'>

        </div>
      </div>


      {/* <div className='absolute   w-[15%] h-full bg-[#C1C1C1] z-10' style={{ right: showRightBar ? '0' : '-15%' }}>
        <div onClick={() => setShowRightBar(prev => !prev)} className='absolute top-1/2 -left-6 w-6 h-20 bg-[#C1C1C1] rounded-tl-lg rounded-bl-lg hover:cursor-pointer'>

        </div> */}
      <div className='absolute  bottom-6 right-6 flex flex-row justify-center items-center'>
     
        {
          graph && edit &&
          tools.map(toolL =>
            <div key={toolL.id} onClick={() => setTool(toolL)} className='relative m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer' style={{background:toolL.id == tool.id ? '#707070' : '#C1C1C1'}}>
                <p className='relative text-[11px] font-black text-black z-10 select-none'>
                  {toolL.type}
                </p>
            </div>
          )
        }
        <div onClick={() => setEdit(prev => !prev)} className='relative bg-[#C1C1C1] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
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
        <div onClick={() => setGraph(prev => !prev)} className='relative bg-[#C1C1C1] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
          {
            graph ?
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                360
              </p>
              :
              <p className='relative text-[11px] font-black text-black z-10 select-none'>
                Graph
              </p>
          }
        </div>
        
        <div onClick={() => setModel(<SaveProject />)
        } className='relative bg-[#C1C1C1] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
          <p className='relative text-[11px] font-black text-black z-10 select-none'>
            Save
          </p>
        </div>
      </div>
      {/* </div> */}
      {
        images.length == 0 ?
          <div className='relative w-full h-full flex flex-col justify-center items-center'>
            <p className='relative text-center text-[#cac0c0] text-3xl'>No Photo, Please Enter The First Node</p>
            <button onClick={() => {
              setModel(<SelectImage />)
            }} className='relative w-[200px] flex justify-center items-center rounded-full bg-white my-4'>
              <p className='relative text-[#121212] text-center text-lg py-4'>Select Image</p>
            </button>
            <p className='relative text-[#cac0c0] text-center text-lg py-4'>or Select File (.json)</p>
            <input type='file' accept='.json' onChange={open} className='relative w-[200px] flex justify-center items-center rounded-full bg-white my-4' />
          </div>
          :
          graph ?
            <Graph />
            :
            <View360 />
      }
      {
        model &&
        <Model model={model} />
      }
    </div>
  )
}

export default Layout