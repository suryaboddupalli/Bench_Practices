export const EDUCATION_DATA_SUCCESS = 'EDUCATION_DATA_SUCCESS'
export const EDUCATION_DATA_FAIL = 'EDUCATION_DATA_FAIL'
export const SKILL_DATA_SUCCESS = 'SKILL_DATA_SUCCESS'
export const SKILL_DATA_FAIL = 'SKILL_DATA_FAIL'
export const EXPERIENCE_DATA_SUCCESS = 'EXPERIENCE_DATA_SUCCESS'
export const EXPERIENCE_DATA_FAIL = 'EXPERIENCE_DATA_FAIL'
export const PROJECT_DATA_SUCCESS = 'PROJECT_DATA_SUCCESS'
export const PROJECT_DATA_FAIL = 'PROJECT_DATA_FAIL'
export const PERSONAL_DATA_SUCCESS = 'PERSONAL_DATA_SUCCESS'
export const PERSONAL_DATA_FAIL = 'PERSONAL_DATA_FAIL'
export const OBJECTIVE_DATA_SUCCESS = 'OBJECTIVE_DATA_SUCCESS'
export const OBJECTIVE_DATA_FAIL = 'OBJECTIVE_DATA_FAIL'

export const educationDataSuccess = (data) => {
    return console.log(data), {
        type: EDUCATION_DATA_SUCCESS,
        payload: data
    }
}

export const educationDataFail = (error) => {
    return {
        type: EDUCATION_DATA_FAIL,
        payload: error
    }
}

export const skillDataSuccess = (data) => {
    return console.log(data), {
        type: SKILL_DATA_SUCCESS,
        payload: data
    }
}

export const skillDataFail = (error) => {
    return {
        type: SKILL_DATA_FAIL,
        payload: error
    }
}

export const experienceDataSuccess = (data) => {
    return console.log(data), {
        type: EXPERIENCE_DATA_SUCCESS,
        payload: data
    }
}

export const experienceDataFail = (error) => {
    return {
        type: EXPERIENCE_DATA_FAIL,
        payload: error
    }
}

export const projectDataSuccess = (data) => {
    return {
        type: PROJECT_DATA_SUCCESS,
        payload: data
    }
}

export const projectDataFail = (error) => {
    return {
        type: PROJECT_DATA_FAIL,
        payload: error
    }
}

export const personalDataSuccess = (data) => {
    return {
        type: PERSONAL_DATA_SUCCESS,
        payload: data
    }
}

export const personalDataFail = (error) => {
    return {
        type: PERSONAL_DATA_FAIL,
        payload: error
    }
}

export const objectiveDataSuccess = (data) => {
    return {
        type: OBJECTIVE_DATA_SUCCESS,
        payload: data
    }
}

export const objectiveDataFail = (error) => {
    return {
        type: OBJECTIVE_DATA_FAIL,
        payload: error
    }
}