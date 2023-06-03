import { HealthDice } from './dice'
import ForgottenRealmsLanguages from './languages'
import Skills from './skills'
import Stat from './stat'

type CharacterInfo = {
  name: string

  age?: number
  height?: number
  weight?: number

  image?: string
  appearance?: string
  currentLocation?: string
  birthPlace?: string
  alliesAndOrganizations?: string[]
  backstory?: string
  treasure?: string
  otherFacts?: string

  race?: string
  class?: string
  background?: string
  alignment?: string
  experience?: number
  level?: number

  strength?: number
  dexterity?: number
  constitution?: number
  intelligence?: number
  wisdom?: number
  charisma?: number

  skills?: Skills[]
  savingThrows?: Stat[]
  otherProficiencies?: [ForgottenRealmsLanguages | string]
  otherFeaturesAndTraits?: string[]

  hitPoints?: number
  tempHitPoints?: number
  initiative?: number
  speed?: number
  armorClass?: number
  hitDice?: HealthDice
  deathSaves?: 1 | 2 | 3

  attacks?: string[]
  spellcastingAbility?: Stat
  spellSaveDC?: number
  spellAttackBonus?: number
  spells?: string[]

  money?: number
  equipment?: [string, number][]

  personality?: string
  ideals?: string
  bond?: string
  flaws?: string
}

export default CharacterInfo
