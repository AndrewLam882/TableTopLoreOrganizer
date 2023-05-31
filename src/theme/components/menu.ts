import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
  list: {
    py: '4',
    borderRadius: 'xl',
    border: 'none',
    bg: 'blue.800',
  },
  item: {
    fontSize: 'smaller',
    bg: 'blue.800',
    color: 'white',
    fontWeight: 'normal',
    _hover: {
      bg: 'blue.200',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    my: '4',
    borderColor: 'white',
    borderBottom: '2px dotted',
  },
})

const Menu = defineMultiStyleConfig({ baseStyle })

export default Menu
