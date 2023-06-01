import { VStack, Input, HStack, Text, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import localization from '../localization.json'
import AlertPopup from '../components/alertPopup'
import CardRow from '../components/cards/cardRow'
import CharacterInfo from '../types/characterInfo'

const dummyCharacters: CharacterInfo[] = [
  { name: 'Joe1' },
  { name: 'Jim2' },
  { name: 'Bob3' },
  { name: 'Joe4' },
  { name: 'Jim5' },
  { name: 'Bob6' },
  { name: 'Bob7' },
  { name: 'Bob8' },
  { name: 'Bob9' },
  { name: 'Bob10' },
  { name: 'Bob11' },
]

function Characters() {
  const strings = localization.characters

  const [characters, setCharacters] = useState<CharacterInfo[]>([])
  const [name, setName] = useState('')
  const [searchHits, setSearchHits] = useState<CharacterInfo[]>([])
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    // TODO Set array of characters from imported JSON
    setCharacters(dummyCharacters)
  }, [])

  useEffect(() => {
    setSearchHits(characters.filter((character) => character.name.toLowerCase().includes(name)))
  }, [name, characters])

  const handleSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) setIsEmpty(true)
    else {
      setIsEmpty(false)
      setName(event.target.value)
    }
  }

  return (
    <VStack spacing='16px'>
      <Text>Characters</Text>

      <CardRow cards={dummyCharacters}></CardRow>

      <HStack p='0 32px' w='full' alignItems='top' justifyContent={'center'}>
        <VStack w='60%'>
          <Input type='text' placeholder={strings.placeholder} onChange={handleSearchBarChange} />
          {isEmpty ? <AlertPopup title={strings.error} /> : <Box height='60px'></Box>}
        </VStack>
      </HStack>

      <CardRow cards={searchHits} variant='search'></CardRow>
    </VStack>
  )
}

export default Characters
