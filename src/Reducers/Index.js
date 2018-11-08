import {combineReducers} from 'redux'
import products from './products'
import EditAddJob from './EditAddJob'

const myReducer = combineReducers({
    products,
    EditAddJob
})

export default myReducer
