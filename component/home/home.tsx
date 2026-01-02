import React from 'react'
import HeroPage from './hero/page'
import AboutPage from './about/page'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroPage />
      <AboutPage />
    </div>
  )
}

export default Home