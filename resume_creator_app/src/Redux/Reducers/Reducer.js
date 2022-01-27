import {
    EDUCATION_DATA_FAIL,
    EDUCATION_DATA_SUCCESS,
    SKILL_DATA_FAIL, SKILL_DATA_SUCCESS,
    EXPERIENCE_DATA_FAIL, EXPERIENCE_DATA_SUCCESS,
    PROJECT_DATA_SUCCESS, PROJECT_DATA_FAIL,
    PERSONAL_DATA_SUCCESS, PERSONAL_DATA_FAIL,
    OBJECTIVE_DATA_SUCCESS, OBJECTIVE_DATA_FAIL
} from "../actions/Action";

const initialState = {
    education: [],
    skills: [],
    error: '',
    experience: [],
    project: []
}

console.log(initialState.education)

export const educationReducer = (state = initialState.education, action) => {
    switch (action.type) {
        case EDUCATION_DATA_SUCCESS:
            return { education: action.payload }
        case EDUCATION_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const skillReducer = (state = initialState.skills, action) => {
    switch (action.type) {
        case SKILL_DATA_SUCCESS:
            return console.log(action.payload), { skills: action.payload }
        case SKILL_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const experienceReducer = (state = initialState.experience, action) => {
    switch (action.type) {
        case EXPERIENCE_DATA_SUCCESS:
            return { experience: action.payload }
        case EXPERIENCE_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_DATA_SUCCESS:
            return { project: action.payload }
        case PROJECT_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const personalReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAL_DATA_SUCCESS:
            return { PERSONAL_DATA_SUCCESS: action.payload }
        case PERSONAL_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

export const objectiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBJECTIVE_DATA_SUCCESS:
            return { objective: action.payload }
        case OBJECTIVE_DATA_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}