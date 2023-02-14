import { defaultState } from "./index";

export const genderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_GENDER":
            return { ...state, gender: action.gender.gender }
        default:
            return state
    }
};