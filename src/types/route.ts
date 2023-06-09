import { MouseEventHandler } from 'react'

type Route = {
  onClick: MouseEventHandler
  label?: string | undefined
  icon?: JSX.Element
}

export default Route
