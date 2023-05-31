import { extendTheme } from '@chakra-ui/react'
import Button from './components/button'
import Menu from './components/menu'
import styles from './styles'

const config = { components: { Button, Menu } }

const index = extendTheme(config, styles)

export default index
