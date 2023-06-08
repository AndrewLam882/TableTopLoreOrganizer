import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { BsPersonFillAdd } from 'react-icons/bs'
import { MdAddLocationAlt } from 'react-icons/md'
import { AddIcon } from '@chakra-ui/icons'
import LocalizedStrings from '../../localization'
import NavButton from '../navButton'

const strings = LocalizedStrings.navbar

const AddContentNav = () => {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem border='none'>
        <AccordionButton>
          <HStack>
            <AddIcon />
            <Text>{strings.add.title}</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <VStack spacing='16px'>
            <NavButton label={strings.add.character} leftIcon={<BsPersonFillAdd />} />
            <NavButton label={strings.add.location} leftIcon={<MdAddLocationAlt />} />
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddContentNav
