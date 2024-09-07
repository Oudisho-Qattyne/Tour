import React, { useContext, useState } from 'react'
import View360 from './View360/View360'
import Model from './UI/Model'
import { AppContext } from './AppState'
function Layout() {
  const { model, setModel } = useContext(AppContext)



  return (
    <div className="realtive w-screen h-screen overflow-hidden">
      <View360 />
      {
        model &&
        <Model model={model} />
      }
    </div>
  )
}

export default Layout