import { Box, Stack, VStack, useDisclosure } from '@chakra-ui/react'
import { BiImport, BiExport } from 'react-icons/bi'
import ButtonRoute from '../../types/buttonRoute'
import NavButton from './navButton'
import AddContentNav from './addContentNav'

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

          <AddContentNav />
        </VStack>

        <VStack p='16px 0' borderTop='1px solid white' spacing='16px'>
          <NavButton label={strings.import} leftIcon={<BiImport />} onClick={onImportOpen} />
          <NavButton label={strings.export} leftIcon={<BiExport />} />
        </VStack>
      </Stack>

      <JsonImportModal isOpen={isImportOpen} onClose={onImportClose} />
    </Box>
  )
}

export default NavBar
