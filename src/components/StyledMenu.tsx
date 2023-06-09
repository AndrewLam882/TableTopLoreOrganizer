import { AddIcon, ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuItemProps,
  MenuListProps,
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

export type MenuOptionType = {
  onClick: MouseEventHandler
  label: string
  command?: string
  leftIcon?: JSX.Element
}

interface StyledMenuProps {
  label: string
  openLabel?: string
  options: MenuOptionType[]
  buttonProps?: MenuItemProps
  listProps?: MenuListProps
  itemProps?: MenuItemProps
}

const StyledMenu = ({
  label,
  openLabel,
  options,
  buttonProps,
  listProps,
  itemProps,
}: StyledMenuProps) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronLeftIcon />}
            leftIcon={<AddIcon />}
            {...buttonProps}
          >
            {!openLabel || !isOpen ? label : openLabel}
          </MenuButton>
          <MenuList w='23rem' {...listProps}>
            {options.map(({ onClick, label: buttonLabel, command, leftIcon }: MenuOptionType) => (
              <MenuItem
                key={`menuitem-${buttonLabel}-option`}
                onClick={onClick}
                icon={leftIcon}
                command={command}
                {...itemProps}
              >
                {buttonLabel}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default StyledMenu
