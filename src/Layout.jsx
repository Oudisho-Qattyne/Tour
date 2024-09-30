import React, { useContext, useRef, useState } from 'react'
import View360 from './View360/View360'
import Model from './UI/Model'
import { AppContext } from './AppState'
import Graph from './UI/Graph/Graph'
import SelectImage from './UI/SelectImage'
import SaveProject from './UI/SaveProject'
import NodeData from './UI/NodeData/NodeData'
import arrowIcon from './assets/icons/arrowIcon.png'
import nodesIcon from './assets/icons/nodesIcon.png'
import icon360 from './assets/icons/360Icon.png'
import editIcon from './assets/icons/editIcon.png'
import eyeIcon from './assets/icons/eyeIcon.png'
import saveIcon from './assets/icons/saveIcon.png'
function Layout() {
  const { model, setModel, setEdit, edit, showLeftBar, setShowLeftBar, graph, setGraph, images, open, setNode, node, tools, setTool, tool } = useContext(AppContext)



  return (
    <div className="realtive w-screen h-screen flex justify-center items-center overflow-hidden ">

      <div className='fixed  w-[15%] h-full bg-[#121212] z-40 ransition-transform duration-1000' style={{ left: showLeftBar ? '0' : '-15%' }}>
        <div className='relative w-full h-full overflow-scroll scrollbar-hide '>

          {
            images.length == 0 ?
              <p className='relative text-[#121212] text-center text-lg py-4'>No Nodes To Show</p>

              :
              images.map(nodeL =>
                <NodeData nodeL={nodeL} />
              )
          }
        </div>
        <div onClick={() => setShowLeftBar(prev => !prev)} className='absolute top-1/2 -right-10 w-10 h-20 bg-[#121212] rounded-tr-full rounded-br-full flex justify-center items-center hover:cursor-pointer'>
        <div className='relative select-none p-1 -left-1'>
            <img src={arrowIcon} className={`relative w-full aspect-square ${showLeftBar ? 'rotate-180' : ''} transition-transform duration-1000`}/>
          </div>
        </div>
      </div>


      {/* <div className='absolute   w-[15%] h-full bg-[#C1C1C1] z-10' style={{ right: showRightBar ? '0' : '-15%' }}>
        <div onClick={() => setShowRightBar(prev => !prev)} className='absolute top-1/2 -left-6 w-6 h-20 bg-[#C1C1C1] rounded-tl-lg rounded-bl-lg hover:cursor-pointer'>

        </div> */}
      <div className='absolute  bottom-6 right-6 flex flex-row justify-center items-center'>

        {
          graph && edit &&
          tools.map(toolL =>
            <div key={toolL.id} onClick={() => setTool(toolL)} className='relative m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer' style={{ background: toolL.id == tool.id ? '#707070' : '#121212' }}>
               <div className='relative select-none p-2'>
                <img src={toolL.icon} className='relative w-full aspect-square'/>
              </div>
            </div>
          )
        }
        <div onClick={() => setEdit(prev => !prev)} className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
          {edit ?
            <div className='relative select-none p-1'>
            <img src={eyeIcon} className='relative w-full aspect-square'/>
          </div>
            :
            <div className='relative select-none p-2'>
                <img src={editIcon} className='relative w-full aspect-square'/>
              </div>
          }
        </div>
        <div onClick={() => setGraph(prev => !prev)} className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
          {
            graph ?
              <div className='relative select-none p-1'>
                <img src={icon360} className='relative w-full aspect-square'/>
              </div>
              :
              <div className='relative select-none p-1'>
              <img src={nodesIcon} className='relative w-full aspect-square'/>
            </div>
          }
        </div>

        <div onClick={() => setModel(<SaveProject />)
        } className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
           <div className='relative select-none p-2'>
              <img src={saveIcon} className='relative w-full aspect-square'/>
            </div>
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