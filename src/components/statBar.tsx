import { VStack } from '@chakra-ui/react'
import { UseFormRegister, FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import StatInput from './input/statInput'

interface StatBarProps {
  register: UseFormRegister<FieldValues>
  watch: UseFormWatch<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const StatBar = ({ register, watch, setValue }: StatBarProps) => {
  const stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

  return (
    <VStack
      position='absolute'
      left='-3.25rem'
      top='50%'
      bgColor='rgba(0,0,0,0.8)'
      p='1.5rem 0.5rem 1.75rem 0.5rem'
      borderRadius='8px'
      spacing='20px'
    >
      {stats.map((key) => (
        <StatInput key={key} label={key} register={register} setValue={setValue} watch={watch} />
      ))}
    </VStack>
  )
}

export default StatBar
