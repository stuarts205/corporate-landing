import React from 'react'
import HeroPage from './hero/page'
import AboutPage from './about/page'
import ServicesPage from './services/page'
import WorkProcessPage from './workprocess/page'
import ProjectPage from './project/page'
import BlogPage from './blog/page'
import ContactPage from './contact/page'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroPage />
      <AboutPage />
      <ServicesPage />
      <WorkProcessPage />
      <ProjectPage />
      <BlogPage />
      <ContactPage />
    </div>
  )
}

export default Home