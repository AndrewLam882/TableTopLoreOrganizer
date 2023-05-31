import { MouseEventHandler } from 'react'

type RouteType = {
  onClick: MouseEventHandler
  label?: string | undefined
  icon?: JSX.Element
}

export default RouteType
