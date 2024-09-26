import React, { useContext, useState } from 'react'
import Input from './Input/Input'
import { AppContext } from '../AppState'

function SaveProject() {
   const { save , setModel } = useContext(AppContext)
   const [fileName, setFileName] = useState(
    {
      fileName: {
        id: 1,
        value: '',
        error: '',
        placeholder: 'File Name',
        validation: ['required'],
        type: 'text',
        valid: true
      }
    }
  )
  
  return (
    <div className='relative w-full h-full p-10 justify-between items-center'>
    {
        fileName &&
        Object.keys(fileName).map(field => {
            return (
                <Input {...fileName[field]} onChange={(e) => setFileName(prev => ({
                    ...prev,
                    fileName:{
                        ...prev.fileName,
                        value:e.target.value
                    }
                }))
                } />
            )
        }
        )
    }
    <div className='relative w-full flex flex-row justify-evenly items-center'>
        <div className='relative w-1/2 p-5'>
            <button onClick={() => {
                setModel(null)
            }} className='relative w-full flex justify-center items-center rounded-full bg-white border border-1 border-[#C1C1C1]'>
                <p className='relative text-[#C1C1C1] py-3'>Cancel</p>
            </button>
        </div>
        <div className='relative w-1/2 p-5'>
            <button onClick={() => {
                if(fileName.fileName.value){
                    save(fileName.fileName.value)
                }
                else{
                    setFileName(prev => ({
                        ...prev,
                        fileName:{
                            ...prev.fileName,
                            error:'required'
                        }
                    }))
                }
                }}className='relative w-full flex justify-center items-center rounded-full bg-black '>
                <p className='relative text-[#FFFFFF] py-3'>Okay</p>
            </button>
        </div>
    </div>
</div>
  )
}

export default SaveProject