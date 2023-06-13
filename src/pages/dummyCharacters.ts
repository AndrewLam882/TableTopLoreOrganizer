import CharacterInfo from '../types/characterInfo'

const Gandor: CharacterInfo = {
  id: 0,
  name: 'Gandor',
  age: 32,
  race: 'Human',
  class: 'Wizard',
  level: 5,
  strength: 10,
  dexterity: 14,
  constitution: 12,
  intelligence: 18,
  wisdom: 13,
  charisma: 11,
  hitPoints: 30,
  armorClass: 15,
  skills: ['Arcana', 'History'],
  savingThrows: ['Intelligence', 'Wisdom'],
  equipment: [],
  currentLocation: 'test location',
  backstory: 'backstory',
}

const Elysia: CharacterInfo = {
  id: 1,
  name: 'Elysia',
  age: 24,
  race: 'Wood Elf',
  class: 'Rogue',
  level: 3,
  strength: 12,
  dexterity: 16,
  constitution: 14,
  intelligence: 10,
  wisdom: 13,
  charisma: 8,
  hitPoints: 24,
  armorClass: 17,
  skills: ['Stealth', 'Perception', 'Acrobatics'],
  savingThrows: ['Dexterity', 'Intelligence'],
  equipment: [
    { name: 'Rapier', amount: 1 },
    { name: 'Leather Armour', amount: 1 },
    { name: 'Thieves Tools', amount: 1 },
  ],
}

const Alistair: CharacterInfo = {
  id: 2,
  name: 'Alistair',
  age: 42,
  race: 'Dwarf',
  class: 'Fighter',
  level: 6,
  strength: 18,
  dexterity: 14,
  constitution: 16,
  intelligence: 10,
  wisdom: 12,
  charisma: 9,
  hitPoints: 56,
  armorClass: 18,
  skills: ['Athletics', 'Survival', 'Intimidation'],
  savingThrows: ['Strength', 'Constitution'],
  equipment: [
    { name: 'Rapier', amount: 1 },
    { name: 'Plate Armor', amount: 1 },
    { name: 'Shield', amount: 1 },
  ],
}

const dummyCharacters: CharacterInfo[] = [Gandor, Elysia, Alistair]

export default dummyCharacters
