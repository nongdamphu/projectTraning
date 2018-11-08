import * as types from '../Constant/TypeActions'
import noteData from '../utils/noteData';


export const actFetchProductsRequest = () => {
    return dispatch => {
        return noteData('list-tranning').on('value', res => {
            let products = [];
            res.forEach(product => {
                let id = product.key;
                let name = product.val().name
                let price = product.val().price
                let status = product.val().status
                products.push({
                    id: id,
                    name: name,
                    price: price,
                    status: status
                })
            })
            setTimeout(() => { dispatch(actFetchProducts(products)); }, 1)
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const onDelete = (id) => {
    return {
        type: types.ON_DELETE,
        id
    }
}

export const onSubmit = val => {
    return {
        type: types.ON_SUBMIT,
        val
    }
}

export const getEditRequest = (id) => {
    return dispatch => {
        return noteData(`list-tranning/${id}`).on('value', res => {
            let products = {
                id: res.key,
                name: res.val().name,
                price: res.val().price,
                status: res.val().status
            };
            setTimeout(() => { dispatch(getEdit(products)); }, 1)
        })
    }
}

export const getEdit = (product) => {
    return {
        type: types.GET_EDIT,
        product
    }
}



export const onEdit = (product) => {
    return {
        type: types.ON_EDIT,
        product
    }
}



export const addList = () => {
    return {
        type: types.ADD_LIST
    }
}


