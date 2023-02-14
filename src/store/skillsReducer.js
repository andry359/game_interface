import { defaultState } from "./index";

export const skillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_SKILLS":
            return { ...state, skills: action.skills.skills }
        default:
            return state
    }
};