import React from 'react'
import Navbar from './components/Navbar/Navbar'
import TitlePage from './components/TitlePage/TitlePage'
import Programs from './components/Programs/Programs' 
import Title from './components/title/title'
import About from './components/about/about'
import Gallery from './components/Gallery/Gallery'

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
    </div>
  )
}

export default App