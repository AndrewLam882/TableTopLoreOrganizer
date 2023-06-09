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
import NavButton from './navButton'

const strings = LocalizedStrings.navbar

const AddContentNav = () => {
  return (
    <Accordion allowToggle alignSelf='start' w='full'>
      <AccordionItem border='none'>
        <AccordionButton>
          <HStack spacing='15px'>
            <AddIcon />
            <Text>{strings.add.title}</Text>
            <AccordionIcon />
          </HStack>
        </AccordionButton>
        <AccordionPanel padding='0' borderTop='1px solid white'>
          <VStack spacing={0} pl='20px'>
            <NavButton label={strings.add.character} leftIcon={<BsPersonFillAdd />} />
            <NavButton label={strings.add.location} leftIcon={<MdAddLocationAlt />} />
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddContentNav
