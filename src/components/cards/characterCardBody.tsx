import { Divider, Text } from '@chakra-ui/react'
import React from 'react'

interface CharacterCardBodyProps {
  race?: string
  currentLocation?: string
  backstory?: string
}

const CharacterCardBody = ({ race, currentLocation, backstory }: CharacterCardBodyProps) => {
  return (
    <React.Fragment>
      {race && (
        <>
          <Text>{`Race: ${race || 'Unknown'}`}</Text>
          <Divider></Divider>
        </>
      )}
      {currentLocation && <Text>{`Location: ${currentLocation}`}</Text>}
      {backstory && (
        <>
          <Text textDecoration={'underline'}>{'Description'}</Text>
          <Text>{backstory}</Text>
        </>
      )}
    </React.Fragment>
  )
}

export default CharacterCardBody
