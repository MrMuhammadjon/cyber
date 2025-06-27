import React from 'react'
import HomeBanner from '../components/PageComponents/HomeBanner'
import Applecategory from '../components/PageComponents/Applecategory'
import BrowerByCAtegory from '../components/PageComponents/BowerByCategory'
import { BestProducts } from '../components/PageComponents/BestProducts'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Applecategory />
      <BrowerByCAtegory/>
      <BestProducts/>
    </div>
  )
}

export default Home
