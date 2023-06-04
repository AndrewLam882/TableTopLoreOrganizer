import { Divider, Text } from '@chakra-ui/react'

interface LocationCardBodyProps {
  race?: string
  history?: string
}

const LocationCardBody = ({ race, history }: LocationCardBodyProps) => {
  return (
    <>
      {race && (
        <>
          <Text>{`Dominent Race: ${race}`}</Text>
          <Divider />
        </>
      )}
      <Text textDecoration='underline'>History</Text>
      <Text>{history}</Text>
    </>
  )
}

export default LocationCardBody
