/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },

      code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
    },
  },
}

// const config = { components: { Button, Menu } }

export default extendTheme(theme)
