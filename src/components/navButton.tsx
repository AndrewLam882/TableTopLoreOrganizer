import { Button, ButtonProps, HStack, Text } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface NavButtonProps extends ButtonProps {
  onClick?: MouseEventHandler
  label?: string
}

const NavButton = ({ onClick, label, ...rest }: NavButtonProps) => {
  return (
    <Button onClick={onClick} w='full' iconSpacing={3} {...rest} background='none'>
      <HStack w='100%' justifyContent='space-between'>
        <Text>{label}</Text>
      </HStack>
    </Button>
  )
}

export default NavButton
