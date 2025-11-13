import React from 'react'
import Hero from './components/screens/HomePage/HeroSection'
import BlogSection from './components/screens/HomePage/BlogSection'
import TechBlogSection from './components/screens/HomePage/TechBlogSection'
import CategorySection from './components/screens/HomePage/CategorySection'
import TestimonialsSection from './components/screens/HomePage/TestimonialsSection'



function page() {
  return (
    <div className=' space-y-5'>
      <Hero/>
      <BlogSection/>
      <TechBlogSection/>
      <CategorySection/>
      <TestimonialsSection/>
    </div>
  )
}

export default page