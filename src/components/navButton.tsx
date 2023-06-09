import { Button, ButtonProps, HStack, Text } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface NavButtonProps extends ButtonProps {
  onClick?: MouseEventHandler
  label?: string
}

const NavButton = ({ onClick, label, ...rest }: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant='navbutton'
      size='md'
      textAlign='right'
      w='8rem'
      iconSpacing={3}
      {...rest}
    >
      <HStack w='100%' justifyContent='space-between'>
        <Text className='button-text'>{label}</Text>
      </HStack>
    </Button>
  )
}

export default NavButton
