import React from 'react'
import Hero from '@/components/Hero'
import BrowseRange from '@/components/BrowseRange'
import Products from '@/components/Products'
import Explore from '@/components/Explore'

const Home = () => {
  return (
    <main>
      <Hero />
      <BrowseRange />
      <Products />
      <Explore />
    </main>
  )
}

export default Home

