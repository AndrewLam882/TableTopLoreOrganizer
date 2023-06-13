import CharacterInfo from '../../types/characterInfo'
import { ADD_CHARACTER, DELETE_CHARACTER } from '../actionTypes'

const initialState = {
  characters: [] as CharacterInfo[],
}

type Action = { type: string; payload: any }

// eslint-disable-next-line @typescript-eslint/default-param-last
const characterLists = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_CHARACTER: {
      const newCharacter = action.payload
      return {
        ...state,
        characters: [...state.characters, { ...newCharacter, id: state.characters.length }],
      }
    }
    case DELETE_CHARACTER: {
      const id = action.payload
      const edittedCharacterArray = [...state.characters]
      edittedCharacterArray.splice(id, 1)
      return {
        ...state,
        characters: edittedCharacterArray,
      }
    }
    default:
      return state
  }
}

export default characterLists
