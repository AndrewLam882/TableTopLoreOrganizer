import { Divider, Text } from '@chakra-ui/react'
import React from 'react'

interface LocationCardBodyProps {
  race?: string
  history?: string
}

const LocationCardBody = ({ race, history }: LocationCardBodyProps) => {
  return (
    <React.Fragment>
      {race && (
        <>
          <Text>{`Dominent Race: ${race}`}</Text>
          <Divider />
        </>
      )}
      <Text textDecoration={'underline'}>{'History'}</Text>
      <Text>{history}</Text>
    </React.Fragment>
  )
}

export default LocationCardBody
