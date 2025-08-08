import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Story  />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App