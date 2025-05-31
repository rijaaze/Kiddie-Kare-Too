import React from 'react'
import Navbar from './components/Navbar/Navbar'
import TitlePage from './components/TitlePage/TitlePage'
import Programs from './components/Programs/Programs' 
import Title from './components/title/title'
import About from './components/about/about'
import Gallery from './components/Gallery/Gallery'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <TitlePage/>
      <Title subTitle="What We Offer" title="Our Programs"/>
      <Programs/>
      <About/>
      <Title subTitle="Check out some of the wonderful moments at Kiddie Kare Too!" title="Our Gallery"/>
      <Gallery/>
      <Title subTitle="What Parents Say" title="Reviews"/>
      <div className="container">
        <Reviews/>
      <Title subTitle="Get in Touch" title="Contact Us"/>
      <Contact/>
      <Footer/>

      </div>
    </div>
  )
}

export default App