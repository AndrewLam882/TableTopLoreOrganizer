import RechargeType from './rechargeType'

type Item = {
  name: string
  amount: number
  isEquipped?: boolean
  bonus?: [string, number][] // TODO include items into stat calculations and rolls
  uses?: number
  maxUses?: number
  rechargeAmount?: number
  rechargeType?: RechargeType
}

export default Item
