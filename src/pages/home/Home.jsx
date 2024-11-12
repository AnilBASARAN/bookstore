import React from 'react'
import Banner from './Banner'
import TopSales from './TopSales'
import Recommended from './Recommended'
import News from './News'

function Home() {
  return (
    <>
        <Banner />
        <Recommended />
        <TopSales />
        <News />
    </>
  )
}

export default Home