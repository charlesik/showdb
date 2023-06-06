import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import Movies from './components/Movies'

function App() {

  return (
    <div>
      <Header/>
      {/* <Search/> */}
      <Movies/>
    </div>
  )
}

export default App
