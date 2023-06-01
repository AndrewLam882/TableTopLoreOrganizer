import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import CardInfo from '../../types/cardInfo'
import './styles.css'

interface CardProps {
  info: CardInfo
  variant?: 'search' | 'pinned'
}

const Card = ({ info, variant = 'pinned', ...rest }: CardProps) => {
  return (
    <ChakraCard className={`${variant}-card`} {...rest}>
      {variant === 'search' && <span className='race-icon'></span>}
      <CardHeader className={`${variant}-card-header`}>
        <p>{info.name}</p>
        <h2>{info.name}</h2>
      </CardHeader>
      <CardBody className={`${variant}-card-body`}>Test body 3</CardBody>
      <CardFooter className={`${variant}-card-body`}>
        <Button variant={'navbutton'}>TestButton</Button>
      </CardFooter>
      {variant === 'search' && <span className='class-icon'></span>}
    </ChakraCard>
  )
}

export default Card
