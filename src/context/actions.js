
import { SELECT_MENU } from './types'

const selectDashMenu = (dispatch, payload) => {
    dispatch({
        type: SELECT_MENU,
        payload
    })
}

export const actions = {
    selectDashMenu,
    driveStatus: 'P',
    selectedAppMenu: 'carStatus'
}
