import React from 'react'
import Navbar from './components/Navbar.jsx'
import './app.css'
import Banner from './components/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid.jsx'
import Footer from './components/Footer.jsx'



function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ApartmentGrid/>
      <Footer/>

    </div>
  )
}

export default App;