import { 
    CHANGE_DRIVE_STATUS, 
    SELECT_MENU,
    SELECT_DRIVE_STATUS,
    TOGGLE_AUTOPILOT,
} from './types'

export default (state, { type, payload }) => {
    switch (type) {
        case CHANGE_DRIVE_STATUS:
            return { ...state, driveStatus: payload }
        case SELECT_MENU:
            return { ...state, selectedAppMenu: payload }
        case SELECT_DRIVE_STATUS:
            return { ...state, driveStatus: payload }
        case TOGGLE_AUTOPILOT:
            return { ...state, driveStatus: payload }
        default:
            return state
    }
}