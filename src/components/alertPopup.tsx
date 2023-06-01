import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

type AlertPopupProps = {
  title: string | undefined
}

const AlertPopup = ({ title }: AlertPopupProps) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
    </Alert>
  )
}

export default AlertPopup
