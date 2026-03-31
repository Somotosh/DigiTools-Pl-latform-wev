import React, { useState } from 'react';
import Navber from './Component/Navber';
import Banner from './Component/Banner';
import StatsSection from './Component/StatsSection';
import ToolsSection from './Component/ToolsSection';
import Tabes from './Component/Tabes';
import Cadrs from './Component/Cadrs';
import BuyCard from './Component/BuyCard';
import StepsSection from './Component/StepsSection';
import PricingSection from './Component/PricingSection';
import Footer from './Component/Footer';


const getModel = async () => {

  const res = await fetch('/models.json')
  return res.json()
}

const modelPromes = getModel()
// console.log(modelPromes)

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [cards, setCards] = useState([])



  return (
    <>
      <Navber cards={cards} />
      <Banner />
      <StatsSection />
      <ToolsSection />
      <Tabes activeTab={activeTab} setActiveTab={setActiveTab}  cards={cards} />

      {activeTab === "products" && <Cadrs modelPromes={modelPromes} cards={cards} setCards={setCards} />}
      {activeTab === "buyCard" && <BuyCard cards={cards} setCards={setCards} />}

      <StepsSection />
      <PricingSection />
      <Footer />


    </>

  )
}

export default App
