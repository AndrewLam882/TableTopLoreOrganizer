import Stat from './stat'

type Skills =
  | 'Acrobatics'
  | 'Animal Handling'
  | 'Arcana'
  | 'Athletics'
  | 'Deception'
  | 'History'
  | 'Insight'
  | 'Intimidation'
  | 'Investigation'
  | 'Medicine'
  | 'Nature'
  | 'Perception'
  | 'Performance'
  | 'Persuasion'
  | 'Religion'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Survival'

export default Skills

function mapSkillToStat(skill: Skills): Stat | undefined {
  switch (skill) {
    case 'Acrobatics':
    case 'Sleight of Hand':
    case 'Stealth':
      return 'Dexterity'
    case 'Animal Handling':
    case 'Insight':
    case 'Medicine':
    case 'Perception':
    case 'Survival':
      return 'Wisdom'
    case 'Arcana':
    case 'History':
    case 'Investigation':
    case 'Nature':
    case 'Religion':
      return 'Intelligence'
    case 'Athletics':
      return 'Strength'
    case 'Deception':
    case 'Intimidation':
    case 'Performance':
    case 'Persuasion':
      return 'Charisma'
    default:
      return undefined
  }
}
