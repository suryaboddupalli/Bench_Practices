import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { educationReducer, experienceReducer, skillReducer, projectReducer, personalReducer, objectiveReducer } from './Reducers/Reducer'

const rootReducer = combineReducers({
    education: educationReducer,
    skills: skillReducer,
    experience: experienceReducer,
    project: projectReducer,
    personal: personalReducer,
    objective: objectiveReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))