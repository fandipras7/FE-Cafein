import {combineReducers} from 'redux'
import companyReducer from './companyReducer'
import userReducer from './userReducer'
import pekerjaReducer from "./pekerjaReducer";


const rootReducer = combineReducers({
    user: userReducer,
    company: companyReducer,
    pekerja: pekerjaReducer,
    
})


export default rootReducer;
