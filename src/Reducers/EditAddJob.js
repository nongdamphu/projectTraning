import * as types from '../Constant/TypeActions'
import noteData from '../utils/noteData';

let initialState = {
    id: '',
    name: '',
    price: '',
    status: true
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_EDIT:
            let { id, name, price, status } = action.product
            noteData('list-tranning').child(id).update({
                id: id,
                name: name,
                price: price,
                status: status
            })
            return action.product
        case types.GET_EDIT:
            state = action.product
            return state
        default:
            return state
    }
}

export default myReducer