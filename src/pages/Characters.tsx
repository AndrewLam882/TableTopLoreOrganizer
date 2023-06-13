import { VStack, Input, HStack, Text, Box } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import localization from '../localization'
import AlertPopup from '../components/alertPopup'
import CardRow from '../components/cards/cardRow'
import CharacterInfo from '../types/characterInfo'
import dummyCharacters from './dummyCharacters'

function Characters() {
  const strings = localization.characters

  const [characters, setCharacters] = useState<CharacterInfo[]>([])
  const [name, setName] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    // TODO Set array of characters from imported JSON
    setCharacters(dummyCharacters)
  }, [])

  const searchHits = useMemo(
    () => characters.filter((character) => character.name?.toLowerCase().includes(name)),
    [name, characters],
  )

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

      <CardRow cards={dummyCharacters} />

      <HStack p='0 32px' w='full' alignItems='top' justifyContent='center'>
        <VStack w='60%'>
          <Input type='text' placeholder={strings.placeholder} onChange={handleSearchBarChange} />
          {isEmpty ? <AlertPopup title={strings.error} /> : <Box height='3rem' />}
        </VStack>
      </HStack>

      <CardRow cards={searchHits as CharacterInfo[]} variant='search' />
    </VStack>
  )
}

export default Characters
