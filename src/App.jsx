import React, { useState } from 'react';
import Navber from './Component/Navber';
import Banner from './Component/Banner';
import StatsSection from './Component/StatsSection';
import ToolsSection from './Component/ToolsSection';
import Tabes from './Component/Tabes';
import Cadrs from './Component/Cadrs';
import BuyCard from './Component/BuyCard';


 const getModel = async () =>{
  
    const res = await fetch('/models.json')
    return res.json()
  }

  const modelPromes = getModel()
  // console.log(modelPromes)

function App() {
  const [activeTab ,setActiveTab] =useState('products')
  
  

  return (
    <>
    <Navber />
    <Banner />
    <StatsSection />
    <ToolsSection />
    <Tabes activeTab={activeTab} setActiveTab={setActiveTab} />
     
     {activeTab ==="products" && <Cadrs modelPromes={modelPromes}/>}
     {activeTab ==="buyCard" &&  <BuyCard />}
    
    
    </>

  )
}

export default App
