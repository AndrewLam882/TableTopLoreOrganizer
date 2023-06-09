import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

import LocalizedStrings from '../../localization'

const strings = LocalizedStrings.modals.import

type JsonImportModalProps = {
  isOpen: boolean
  onClose: () => void
}

const JsonImportModal = ({ isOpen, onClose }: JsonImportModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file)
  }

  const onSubmit = (data: any) => {
    // TODO Store data
  }

  const handleSubmit = () => {
    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const jsonData = JSON.parse(event.target?.result as string)
        onSubmit(jsonData)
        setSelectedFile(null)
        onClose()
      }
      reader.readAsText(selectedFile)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignSelf='center'>
        <ModalHeader color='black'>{strings.title}</ModalHeader>
        <ModalCloseButton color='black' />
        <ModalBody color='black'>
          <VStack spacing='16px' alignItems='start'>
            <Alert status='warning'>
              <AlertIcon />
              <Text>{strings.body}</Text>
            </Alert>
            <input type='file' accept='.json' onChange={handleFileChange} />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='orange' mr='8px' onClick={onClose}>
            {LocalizedStrings.common.cancel}
          </Button>
          <Button colorScheme='blue' onClick={handleSubmit}>
            {LocalizedStrings.common.import}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default JsonImportModal
