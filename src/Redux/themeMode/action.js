import {LIGHT_MODE, DARK_MODE} from './actionType';


export const setLightMode = () => (dispatch) => {
  dispatch ({
    type: LIGHT_MODE,
    dark: false
  })
}

export const setDarkMode = () => (dispatch) => {
  dispatch ({
    type: DARK_MODE,
    dark: true
  })
}