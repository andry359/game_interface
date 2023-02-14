import { defaultState } from "./index";

export const mainPointsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_MAIN-POINT":
            return { ...state, mainPoint: action.mainPoint.mainPoint }
        default:
            return state
    }
};