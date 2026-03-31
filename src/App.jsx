import React from 'react';
import Navber from './Component/Navber';
import Banner from './Component/Banner';
import StatsSection from './Component/StatsSection';
import ToolsSection from './Component/ToolsSection';
import Tabes from './Component/Tabes';
import Cadrs from './Component/Cadrs';


 const getModel = async () =>{
  
    const res = await fetch('/models.json')
    return res.json()
  }

  const modelPromes = getModel()
  console.log(modelPromes)

function App() {
  

  return (
    <>
    <Navber />
    <Banner />
    <StatsSection />
    <ToolsSection />
    <Tabes />
    <Cadrs modelPromes={modelPromes}/>
    </>

  )
}

export default App
