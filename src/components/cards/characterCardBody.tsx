import { Divider, Text } from '@chakra-ui/react'

interface CharacterCardBodyProps {
  race?: string
  currentLocation?: string
  backstory?: string
}

const CharacterCardBody = ({ race, currentLocation, backstory }: CharacterCardBodyProps) => {
  return (
    <>
      {race && (
        <>
          <Text>{`Race: ${race || 'Unknown'}`}</Text>
          <Divider />
        </>
      )}
      {currentLocation && <Text>{`Location: ${currentLocation}`}</Text>}
      {backstory && (
        <>
          <Text textDecoration='underline'>Description</Text>
          <Text>{backstory}</Text>
        </>
      )}
    </>
  )
}

export default CharacterCardBody
