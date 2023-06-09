import { MouseEventHandler } from 'react'

type ButtonRoute = {
  onClick: MouseEventHandler
  label?: string | undefined
  icon?: JSX.Element
}

export default ButtonRoute
