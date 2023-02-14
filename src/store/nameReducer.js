import { defaultState } from "./index";

export const nameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_NAME":
            return { ...state, name: action.name.name }
        default:
            return state
    }
};