import React from 'react'
import './app.scss'
import Banner from './layout/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid.jsx'
import Main from './layout/Main.jsx'



function App() {
  return (
      <>
      <Main> 
        <Banner/>
        <ApartmentGrid/>
      </Main>
      </>
  )
}

export default App;