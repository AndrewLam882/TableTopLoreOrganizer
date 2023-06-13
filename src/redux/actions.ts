import CharacterInfo from '../types/characterInfo'
import { ADD_CHARACTER, DELETE_CHARACTER } from './actionTypes'

export const addCharacter = (content: CharacterInfo) => {
  const obj = {
    type: ADD_CHARACTER,
    payload: {
      ...content,
    },
  }
  return obj
}

export const deleteCharacter = (content: number) => {
  const obj = {
    type: DELETE_CHARACTER,
    payload: content,
  }
  return obj
}
