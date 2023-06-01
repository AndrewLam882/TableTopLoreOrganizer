import { Flex } from '@chakra-ui/react'
import './styles.css'
import CardInfo from '../../types/cardInfo'
import Card from './card'

interface CardRowProps {
  cards: CardInfo[]
  variant?: 'search' | 'pinned'
}

const CardRow = ({ cards, variant = 'pinned' }: CardRowProps) => {
  return (
    <Flex className={`${variant}-card-list`}>
      {cards.map((info: CardInfo) => (
        <Card key={info.name} info={info} variant={variant}></Card>
      ))}
    </Flex>
  )
}

export default CardRow
