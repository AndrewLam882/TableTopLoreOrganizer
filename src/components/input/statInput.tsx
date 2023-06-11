import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Input, VStack, Text, InputGroup, InputProps, Button } from '@chakra-ui/react'
import { UseFormRegister, FieldValues, UseFormGetValues, UseFormSetValue } from 'react-hook-form'

interface StatInputProps extends InputProps {
  label: string
  register: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  getValues: UseFormGetValues<FieldValues>
  name?: string
  step?: number
  max?: number
  min?: number
}

const skillToModifier = (value: number) => {
  return Math.floor((value - 10) / 2)
}

const StatInput = ({
  label,
  register,
  setValue,
  getValues,
  name,
  step = 1,
  max,
  min,
  ...rest
}: StatInputProps) => {
  const registeredName = label.replace(/\s+/g, '')[0].toLowerCase().concat(label.slice(1))

  const modifier = skillToModifier(getValues(registeredName))

  const onClick = () => {
    // TODO Roll a dice and apply modifier
  }

  const increment = () => {
    const originalValue = parseInt(getValues(registeredName), 10)
    const newValue = originalValue + step

    setValue(registeredName, max !== undefined && newValue > max ? max : newValue)
  }

  const decrement = () => {
    const originalValue = parseInt(getValues(registeredName), 10)
    const newValue = originalValue - step

    setValue(registeredName, min !== undefined && newValue < min ? min : newValue)
  }

  return (
    <VStack spacing='0' position='relative'>
      <Text>{label}</Text>
      <InputGroup alignItems='center' {...rest}>
        <Button minW='0' p='8px' w='0.125rem' h='2rem' onClick={decrement}>
          <ChevronLeftIcon />
        </Button>
        <Input h='3.5rem' w='3.5rem' textAlign='center' {...register(name || registeredName)} />
        <Button minW='0' p='8px' w='0.125rem' h='2rem' onClick={increment}>
          <ChevronRightIcon />
        </Button>
      </InputGroup>
      <Button
        position='absolute'
        bottom='-15px'
        fontSize='0.75rem'
        minW='0'
        boxSize='1.5rem'
        p='8px'
        textAlign='center'
        onClick={onClick}
      >
        <Text>{modifier.toString()}</Text>
      </Button>
    </VStack>
  )
}

export default StatInput
