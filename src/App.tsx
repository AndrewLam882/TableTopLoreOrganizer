import React from 'react'
import './App.css'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'
import { BiCurrentLocation, BiHome } from 'react-icons/bi'
import { BsPersonCircle, BsSearch } from 'react-icons/bs'
import Home from './pages/home'
import Navbar from './components/navigation/navbar'
import Locations from './pages/locations'
import NotFound from './pages/notFound'
import Characters from './pages/characters'
import localization from './localization'
import ButtonRoute from './types/buttonRoute'

const strings = localization.navbar.pages

function App() {
  const navigate = useNavigate()

  const navBarRoutes: ButtonRoute[] = [
    {
      label: strings.home,
      onClick: () => {
        navigate('/')
      },
      icon: <BiHome />,
    },
    {
      label: strings.search,
      onClick: () => {
        // TODO Open search panel
        navigate('/')
      },
      icon: <BsSearch />,
    },
    {
      label: strings.characters,
      onClick: () => {
        navigate('/characters')
      },
      icon: <BsPersonCircle />,
    },
    {
      label: strings.locations,
      onClick: () => {
        navigate('/locations')
      },
      icon: <BiCurrentLocation />,
    },
  ]

  return (
    <div className='App'>
      <Routes>
        <Route
          element={
            <HStack h='100vh' w='100vw'>
              <Navbar routes={navBarRoutes} />
              <Outlet />
            </HStack>
          }
        >
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
