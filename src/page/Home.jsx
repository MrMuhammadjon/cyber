import React from 'react'
import HomeBanner from '../components/PageComponents/HomeBanner'
import Applecategory from '../components/PageComponents/Applecategory'
import BrowerByCAtegory from '../components/PageComponents/BowerByCategory'
import { BestProducts } from '../components/PageComponents/BestProducts'
import { Directions } from '../components/PageComponents/Directions'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Applecategory />
      <BrowerByCAtegory/>
      <BestProducts/>
      <Directions/>
    </div>
  )
}

export default Home
