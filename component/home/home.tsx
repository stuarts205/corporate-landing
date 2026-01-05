'use client'
import React, { useEffect } from 'react'
import HeroPage from './hero/page'
import AboutPage from './about/page'
import ServicesPage from './services/page'
import WorkProcessPage from './workprocess/page'
import ProjectPage from './project/page'
import BlogPage from './blog/page'
import ContactPage from './contact/page'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    }
    initAos();
  }, [])
  
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