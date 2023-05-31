import { Button, ButtonProps } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface NavButtonProps extends ButtonProps {
  onClick?: MouseEventHandler
  label?: string
}

const NavButton = ({ onClick, label, ...rest }: NavButtonProps) => {
  return (
    <Button onClick={onClick} variant={'navbutton'} size={'md'} {...rest}>
      {label}
    </Button>
  )
}

export default NavButton
