import React from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Locations from './pages/Locations'
import NotFound from './pages/NotFound'
import Characters from './pages/Characters'
import RouteType from './types/RouteType'
import localization from './localization.json'

const strings = localization.navbar.pages

const App = () => {
  const navigate = useNavigate()

  const navBarRoutes: RouteType[] = [
    {
      label: strings.home,
      onClick: () => {
        navigate('/')
      },
    },
    {
      label: strings.characters,
      onClick: () => {
        navigate('/characters')
      },
    },
    {
      label: strings.locations,
      onClick: () => {
        navigate('/locations')
      },
    },
  ]

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar routes={navBarRoutes} />}>
          <Route index element={<Home />} />
          <Route path='characters' element={<Characters />} />
          <Route path='locations' element={<Locations />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
