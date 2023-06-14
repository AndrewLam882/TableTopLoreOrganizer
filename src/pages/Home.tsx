import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import LocationInfo from '../types/locationInfo'
import CharacterInfo from '../types/characterInfo'
import dummyCharacters from './dummyCharacters'
import CharacterPanel from '../components/characterPanel'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { ADD_CHARACTER, DELETE_CHARACTER } from '../redux/actionTypes'
import { getCharacterList } from '../redux/selectors'

const Home = () => {
  // TODO setup pinned character list instead of displaying all in store
  const displayList = useAppSelector(getCharacterList)
  const dispatch = useAppDispatch()

  // TODO pass to character panel to clone characters
  const addCharacter = (character: CharacterInfo) => {
    dispatch({ type: ADD_CHARACTER, payload: character })
  }

  // test commit

  const deleteCharacter = (id: number) => {
    dispatch({ type: DELETE_CHARACTER, payload: id })
  }

  return (
    <VStack w='full' h='full' p='16px' overflow='hidden'>
      <Text>Home</Text>
      <HStack boxSize='full' overflowX='scroll' spacing='4rem' p='0 0 0 3.5rem'>
        {displayList.map((info: LocationInfo | CharacterInfo) => {
          const isLocation = 'history' in info
          if (!isLocation)
            return <CharacterPanel character={info} key={`${info.id}-character-panel`} />
          return <div />
        })}
      </HStack>
      {/* TODO Replace with adding new empty character */}
      <Button onClick={() => addCharacter(dummyCharacters[0])}>{dummyCharacters[0].name}</Button>
      <Button onClick={() => addCharacter(dummyCharacters[1])}>{dummyCharacters[1].name}</Button>
      <Button onClick={() => addCharacter(dummyCharacters[2])}>{dummyCharacters[2].name}</Button>

      {/* TODO Replace with clearing all characters */}
      <Button onClick={() => deleteCharacter(0)}>Delete first item</Button>
    </VStack>
  )
}

export default Home
