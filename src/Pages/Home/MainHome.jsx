import React from 'react'
import HeroSection from './HeroSection'
import ServicePage from './ServicePage'
import BlogPage from './BlogPage'
import Contact from './Contact';
const MainHome = () => {
  return (
    <div>
      <HeroSection/>
      <ServicePage/>
      <BlogPage/>
      <Contact/>
    </div>
  )
}

export default MainHome