import { VStack } from '@chakra-ui/react'
import { UseFormRegister, FieldValues, UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import StatInput from './input/statInput'

interface StatBarProps {
  register: UseFormRegister<FieldValues>
  getValues: UseFormGetValues<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const StatBar = ({ register, getValues, setValue }: StatBarProps) => {
  const stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

  return (
    <VStack position='absolute'>
      {stats.map((key) => (
        <StatInput
          key={key}
          label={key}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
      ))}
    </VStack>
  )
}

export default StatBar
