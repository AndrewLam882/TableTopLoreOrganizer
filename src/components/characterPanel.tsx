import { Box, HStack, StackProps, VStack } from '@chakra-ui/layout'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import CharacterInfo from '../types/characterInfo'
import StringInput from './input/stringInput'
import NumberInput from './input/numberInput'
import StatBar from './statBar'

interface CharacterPanelProps extends StackProps {
  character: CharacterInfo
}

const CharacterPanel = ({ character, ...rest }: CharacterPanelProps) => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isDirty, dirtyFields },
  } = useForm()

  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(character)) {
      setValue(key, value)
    }
  }, [character, setValue])

  const bgGradient = character.race
    ? `var(--${character.race.replace(/\s+/g, '-').toLowerCase()}-background)`
    : 'var(--other-background)'

  const onSubmit = () => {}

  return (
    <Box
      minW='47%'
      h='90%'
      fontSize='0.75rem'
      bg={bgGradient}
      border='1px solid white'
      borderRadius='8px'
      display='inline-block'
      {...rest}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack
          padding='16px 16px 16px 4rem'
          w='full'
          bgColor='rgba(0,0,0,0.5)'
          position='relative'
        >
          <StatBar register={register} watch={watch} setValue={setValue} />
          <VStack className='character-general-info'>
            <HStack w='full'>
              <StringInput label='Name' register={register} />
              <StringInput label='Class' register={register} />
            </HStack>
            <VStack>
              <HStack>
                <NumberInput
                  label='Level'
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  min={0}
                />
                <StringInput label='Background' register={register} />
              </HStack>
            </VStack>
          </VStack>
          <HStack>
            <HStack>
              <VStack />
            </HStack>
          </HStack>
        </VStack>
      </form>
    </Box>
  )
}

export default CharacterPanel
