import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShowDetails from './pages/ShowDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="details/:id" element={<ShowDetails />} />
    </Routes>
  );
}

export default App
