import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface NavButtonProps extends ButtonProps {
  onClick?: MouseEventHandler
  label?: string
}

const NavButton = ({ onClick, label, ...rest }: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
      w='full'
      iconSpacing={3}
      background='none'
      borderRadius={0}
      justifyContent='start'
      {...rest}
    >
      <Text>{label}</Text>
    </Button>
  )
}

export default NavButton
