import {
  Card as ChakraCard,
  CardHeader,
  CardBody,
  Text,
  Image,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react'
import './styles.css'
import '../../theme/gradients.css'
import LocationInfo from '../../types/locationInfo'
import CharacterInfo from '../../types/characterInfo'
import CharacterCardBody from './characterCardBody'
import LocationCardBody from './locationCardBody'

interface CardProps {
  info: LocationInfo | CharacterInfo
  variant?: 'search' | 'pinned'
}

const Card = ({ info, variant = 'pinned', ...rest }: CardProps) => {
  const imagePath = 'assets/character_portraits'
  const image = `${imagePath}/${info.name.replace(/\s+/g, '-').toLowerCase()}.png`

  const fallbackBg = `${imagePath}/noImage.png`
  const bgGradient = info.race
    ? `var(--${info.race.replace(/\s+/g, '-').toLowerCase()}-background)`
    : 'var(--other-background)'

  const { isOpen, onOpen, onClose } = useDisclosure()

  const isPinned = variant === 'pinned'
  const isLocation = 'history' in info

  return (
    <ChakraCard
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      className={`${variant}-card`}
      style={{
        backgroundImage:
          !isPinned && info.race ? `url(${image}), url(${fallbackBg}), ${bgGradient}` : bgGradient,
      }}
      {...rest}
    >
      <Collapse in={isOpen || isPinned} animateOpacity>
        <CardHeader className={`${variant}-card-header`}>
          <Text fontSize='xx-small'>Modified date</Text>
          <Text>{info.name}</Text>
        </CardHeader>
        <CardBody className={`${variant}-card-body`} flex={0.5}>
          {!isPinned &&
            (isLocation ? (
              <LocationCardBody race={info.race} history={info.history} />
            ) : (
              <CharacterCardBody
                race={info.race}
                currentLocation={info.currentLocation}
                backstory={info.backstory}
              />
            ))}
          {isPinned && (
            <Image
              src={image}
              alt={`Image of ${info.name}`}
              fallbackSrc={fallbackBg}
              borderRadius='8px'
            />
          )}
        </CardBody>
      </Collapse>
    </ChakraCard>
  )
}

export default Card
