import { Box, Stack, VStack } from '@chakra-ui/react'
import { BiImport, BiExport } from 'react-icons/bi'
import RouteType from '../../types/routeType'
import NavButton from '../navButton'
import AddContentNav from './addContentNav'

import LocalizedStrings from '../../localization'

const strings = LocalizedStrings.navbar

type NavBarPropsType = {
  routes: RouteType[]
}

const NavBar = ({ routes }: NavBarPropsType) => {
  return (
    <Box h='100%' w='11rem' className='navbar' background='gray.800'>
      <Stack h='100%' p='32px 16px' justifyContent='space-between'>
        <VStack spacing='32px'>
          {routes.map(({ onClick, label, icon }: RouteType) => (
            <NavButton
              key={`navbar-${label}-button`}
              onClick={onClick}
              leftIcon={icon}
              label={label}
            />
          ))}

          <AddContentNav />
        </VStack>

        <VStack p='32px 0' borderTop='1px solid white' spacing='32px'>
          <NavButton label={strings.import} leftIcon={<BiImport />} />
          <NavButton label={strings.export} leftIcon={<BiExport />} />
        </VStack>
      </Stack>
    </Box>
  )
}

export default NavBar
