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
import selectorIcon from './assets/icons/selectorIcon.png'
import rotateIcon from './assets/icons/rotateIcon.png'
import editIcon from './assets/icons/editIcon.png'
import eyeIcon from './assets/icons/eyeIcon.png'
import saveIcon from './assets/icons/saveIcon.png'
function Layout() {
  const { model, setModel, setEdit, edit, showLeftBar, setShowLeftBar, graph, setGraph, images, open, setNode, node, tools, setTool, tool, sound, setSound, tools360, tool360, setTool360 , loading } = useContext(AppContext)




  return (
    <div className="realtive w-screen h-screen flex justify-center items-center overflow-hidden ">

      <div className='fixed  w-1/4 h-full bg-[#121212] z-10 ransition-transform duration-1000' style={{ left: showLeftBar ? '0' : '-25%' }}>
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
            <img src={arrowIcon} className={`relative w-full aspect-square ${showLeftBar ? 'rotate-180' : ''} transition-transform duration-1000`} />
          </div>
        </div>
      </div>


      {/* <div className='absolute   w-[15%] h-full bg-[#C1C1C1] z-10' style={{ right: showRightBar ? '0' : '-15%' }}>
        <div onClick={() => setShowRightBar(prev => !prev)} className='absolute top-1/2 -left-6 w-6 h-20 bg-[#C1C1C1] rounded-tl-lg rounded-bl-lg hover:cursor-pointer'>

        </div> */}
      {
        images.length != 0 &&
        <div className='absolute  bottom-6 right-6 flex flex-row justify-center items-center'>
          {
            !graph && edit &&
            <>
              {
                tools360.map(tool =>

                  <div onClick={() => setTool360(tool)} key={tool.id} className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer' style={{ background: tool.id == tool360.id ? '#707070' : '#121212' }}>
                    <div className='relative select-none p-2'>
                      <img src={tool.icon} className='relative w-full aspect-square' />
                    </div>
                  </div>
                )
              }

            </>
          }

          {
            graph && edit &&
            tools.map(toolL =>
              <div key={toolL.id} onClick={() => setTool(toolL)} className='relative m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer' style={{ background: toolL.id == tool.id ? '#707070' : '#121212' }}>
                <div className='relative select-none p-2'>
                  <img src={toolL.icon} className='relative w-full aspect-square' />
                </div>
              </div>
            )
          }
          <div onClick={() => setEdit(prev => !prev)} className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
            {edit ?
              <div className='relative select-none p-1'>
                <img src={eyeIcon} className='relative w-full aspect-square' />
              </div>
              :
              <div className='relative select-none p-2'>
                <img src={editIcon} className='relative w-full aspect-square' />
              </div>
            }
          </div>
          <div onClick={() => setGraph(prev => !prev)} className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
            {
              graph ?
                <div className='relative select-none p-1'>
                  <img src={icon360} className='relative w-full aspect-square' />
                </div>
                :
                <div className='relative select-none p-1'>
                  <img src={nodesIcon} className='relative w-full aspect-square' />
                </div>
            }
          </div>


          <div onClick={() => setModel(<SaveProject />)
          } className='relative bg-[#121212] m-1 w-10 aspect-square flex justify-center items-center rounded-full z-10 cursor-pointer'>
            <div className='relative select-none p-2'>
              <img src={saveIcon} className='relative w-full aspect-square' />
            </div>
          </div>
        </div>
      }

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
      {
        sound &&
        <div className='fixed w-1/3 top-10 right-10 flex flex-row justify-center items-center'>
          <audio autoPlay className='relative w-full' controls>
            <source src={sound} />
            Your browser does not support the audio element.
          </audio>
          <p className='relative w-5 font-black aspect-square text-center select-none cursor-pointer' onClick={() => setSound(null)} >
            x
          </p>
        </div>
      }
      {
        loading &&
        <dv className='fixed w-full h-full flex justify-center items-center z-[10000000000] backdrop-blur-lg'>
          <p className='relative text-[#FFFFFF] font-black text-center text-3xl py-4 select-none animate-bounce'>Loading...</p>
        </dv>
      }
    </div>
  )
}

export default Layout