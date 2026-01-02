'use client'
import React, { useState } from 'react'
import Nav from './nav'
import MobileNav from './mobile-nav'

const NavContainer = () => {

  const [showMobileNav, setShowMobileNav] = useState(false);

  const openMobileNav = () => {
    setShowMobileNav(true);
  }

  const closeMobileNav = () => {
    setShowMobileNav(false);
  }

  return (
    <div>
        <Nav openMobileNav={openMobileNav} />
        <MobileNav showMobileNav={showMobileNav} closeMobileNav={closeMobileNav} />
    </div>
    
  )
}

export default NavContainer