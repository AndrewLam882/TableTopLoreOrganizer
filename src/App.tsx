import React from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Locations from './pages/locations'
import NotFound from './pages/notFound'
import Characters from './pages/characters'
import RouteType from './types/routeType'
import localization from './localization'

const strings = localization.navbar.pages

function App() {
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
