import {combineReducers} from 'redux'
import companyReducer from './companyReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    user: userReducer,
    company: companyReducer,
    
})

export default rootReducer