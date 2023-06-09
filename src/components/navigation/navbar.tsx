import { Box, Divider, Stack, VStack, useDisclosure, Text } from '@chakra-ui/react'
import { BiImport, BiExport } from 'react-icons/bi'
import { BsPersonFillAdd } from 'react-icons/bs'
import { MdAddLocationAlt } from 'react-icons/md'
import ButtonRoute from '../../types/buttonRoute'
import NavButton from './navButton'

import LocalizedStrings from '../../localization'
import JsonImportModal from '../modals/jsonImportModal'

const strings = LocalizedStrings.navbar

type NavBarPropsType = {
  routes: ButtonRoute[]
}

const NavBar = ({ routes }: NavBarPropsType) => {
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure()

  return (
    <Box h='100%' background='gray.800' w='9.8rem'>
      <Stack h='100%' p='32px 0' justifyContent='space-between'>
        <VStack>
          {routes.map(({ onClick, label, icon }: ButtonRoute) => (
            <NavButton
              key={`navbar-${label}-button`}
              onClick={onClick}
              leftIcon={icon}
              label={label}
            />
          ))}
        </VStack>

        <VStack spacing='16px'>
          <Divider />
          <NavButton label={strings.add.character} leftIcon={<BsPersonFillAdd />} />
          <NavButton label={strings.add.location} leftIcon={<MdAddLocationAlt />} />
          <Divider />
          <NavButton label={strings.import} leftIcon={<BiImport />} onClick={onImportOpen} />
          <NavButton label={strings.export} leftIcon={<BiExport />} />
          <Text color='gray.600' fontSize='10px'>
            Created by Andrew Lam
          </Text>
        </VStack>
      </Stack>

      <JsonImportModal isOpen={isImportOpen} onClose={onImportClose} />
    </Box>
  )
}

export default NavBar
