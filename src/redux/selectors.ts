import { RootState } from './store'

// eslint-disable-next-line import/prefer-default-export
export const getCharacterList = (store: RootState) => store.characterLists.characters
