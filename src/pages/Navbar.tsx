import { Outlet } from 'react-router-dom'
import { Box, Flex, HStack } from '@chakra-ui/react'
import RouteType from '../types/routeType'
import NavButton from '../components/navButton'
import StyledMenu, { MenuOptionType } from '../components/styledMenu'

type NavBarPropsType = {
  routes: RouteType[]
}

const createOptions: MenuOptionType[] = [
  {
    onClick: () => alert('Test Character'),
    label: 'Create a Character',
    command: 'Ctrl + Shift + C',
  },
  {
    onClick: () => alert('Test Location'),
    label: 'Create a Location',
    command: 'Ctrl + Shift + X',
  },
]

const ioOptions: MenuOptionType[] = [
  { onClick: () => alert('Test Export'), label: 'Export Data' },
  { onClick: () => alert('Test Import'), label: 'Import Data' },
]

const NavBar = ({ routes }: NavBarPropsType) => {
  return (
    <Box w='100%' mt='16px' data-testid='nav-bar'>
      <Box mb='24px'>
        <Flex justifyContent={'space-between'} p='16px 32px' borderBottom='1px solid white'>
          <NavButton
            key={'navbar-home-button'}
            onClick={routes[0].onClick}
            leftIcon={routes[0].icon}
            label={routes[0].label}
          ></NavButton>

          <HStack>
            {routes.slice(1).map(({ onClick, label, icon }: RouteType) => (
              <NavButton
                key={`navbar-${label}-button`}
                onClick={onClick}
                leftIcon={icon}
                label={label}
              ></NavButton>
            ))}

            <StyledMenu
              label='Add Content'
              openLabel='Select A Type'
              options={ioOptions}
              buttonProps={{ w: '12rem' }}
            ></StyledMenu>
            <StyledMenu
              label='Import/Export Data'
              options={createOptions}
              buttonProps={{ w: '14rem' }}
            ></StyledMenu>
          </HStack>
        </Flex>
      </Box>

      <Outlet />
    </Box>
  )
}

export default NavBar
