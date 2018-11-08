import * as Types from '../Constant/TypeActions'
import noteData from '../utils/noteData';


let initialState = []


let findIndex = (products, id) => {
    let result = null
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    })
    return result
}

let myReducer = (state = initialState, action) => {
    let index = -1;
    let { id } = action
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]

        case Types.ON_DELETE:
            index = findIndex(state, id)
            state.splice(index, 1)
            noteData('list-tranning').child(id).remove()
            return [...state]

        case Types.ON_SUBMIT:
            let { val } = action
            let newState = {
                name: val.txtName,
                price: val.txtPrice,
                status: val.chkbStatus
            }
            noteData('list-tranning').push(newState)
            return state

        default:
            return [...state];
    }
}


export default myReducer