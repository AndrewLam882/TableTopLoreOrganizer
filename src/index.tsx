import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={
            theme.config.initialColorMode as 'dark' | 'light' | 'system' | undefined
          }
        />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
