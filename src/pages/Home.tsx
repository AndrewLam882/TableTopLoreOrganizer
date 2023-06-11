import { HStack, Text, VStack } from '@chakra-ui/react'
import LocationInfo from '../types/locationInfo'
import CharacterInfo from '../types/characterInfo'
import dummyCharacters from './dummyCharacters'
import CharacterPanel from '../components/characterPanel'

const Home = () => {
  const displayList = [...dummyCharacters]

  return (
    <VStack w='full' h='full' p='16px' overflow='hidden'>
      <Text>Home</Text>
      <HStack boxSize='full' overflowX='scroll' spacing='1%'>
        {displayList.map((info: LocationInfo | CharacterInfo) => {
          const isLocation = 'history' in info
          if (!isLocation)
            return (
              <CharacterPanel character={info} key={`${info.name.toLowerCase()}-character-panel`} />
            )
          return <div />
        })}
      </HStack>
    </VStack>
  )
}

export default Home
