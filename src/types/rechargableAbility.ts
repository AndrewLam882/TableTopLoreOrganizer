import RechargeType from './rechargeType'

type RechargableAbility = {
  max: number
  name: string
  rechargeType: RechargeType
  abilitySave: string
  current?: number
  customDC?: number
}

export default RechargableAbility
