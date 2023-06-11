import { Input, InputGroup, InputLeftAddon, InputProps } from '@chakra-ui/input'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface StringInputProps extends InputProps {
  label: string
  register: UseFormRegister<FieldValues>
  name?: string
}

const StringInput = ({ label, register, name, ...rest }: StringInputProps) => {
  return (
    <InputGroup {...rest}>
      <InputLeftAddon>{label}</InputLeftAddon>
      <Input
        {...register(name || label.replace(/\s+/g, '')[0].toLowerCase().concat(label.slice(1)))}
      />
    </InputGroup>
  )
}

export default StringInput
