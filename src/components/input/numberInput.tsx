import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftAddon, InputProps, InputRightAddon } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { UseFormRegister, FieldValues, UseFormGetValues, UseFormSetValue } from 'react-hook-form'

interface NumberInputProps extends InputProps {
  label: string
  register: UseFormRegister<FieldValues>
  getValues: UseFormGetValues<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  name?: string
  step?: number
  max?: number
  min?: number
}

const NumberInput = ({
  label,
  register,
  getValues,
  setValue,
  name,
  step = 1,
  max,
  min,
  ...rest
}: NumberInputProps) => {
  const registeredName = name || label.replace(/\s+/g, '').toLowerCase()

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
    <InputGroup {...rest}>
      <InputLeftAddon>{label}</InputLeftAddon>
      <Input {...register(registeredName)} type='number' />
      <InputRightAddon>
        <VStack>
          <Button h='0.75rem' onClick={increment}>
            <ChevronUpIcon />
          </Button>
          <Button h='0.75rem' onClick={decrement}>
            <ChevronDownIcon />
          </Button>
        </VStack>
      </InputRightAddon>
    </InputGroup>
  )
}

export default NumberInput
