import {LIGHT_MODE, DARK_MODE} from './actionType';

const initialData = {
  dark: false
}

export default function themeReducer(state = initialData, { type, dark }) {
  switch (type) {
    case LIGHT_MODE:
      return {
        ...state,
        dark: dark
      };
    case DARK_MODE:
      return {
        ...state,
        dark: dark
      };
    default:
      return state;
  }

}
