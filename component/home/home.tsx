import React from 'react'
import HeroPage from './hero/page'
import AboutPage from './about/page'
import ServicesPage from './services/page'
import WorkProcessPage from './workprocess/page'
import ProjectPage from './project/page'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroPage />
      <AboutPage />
      <ServicesPage />
      <WorkProcessPage />
      <ProjectPage />
    </div>
  )
}

export default Home