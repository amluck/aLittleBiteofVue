import uuid from 'uuid'

import{
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT
} from './mutatuion-types'

export function saveProduct({commit,state},product){
    const index = state.all.findIndex((p)=>p.id === product.id)
    if (index !== -1) {
        commit(UPDATE_PRODUCT,product)
    }
    else{
        product.id = uuid.v4()
    }
}
export function deleteProduct({commit},productID){
    commit(DELETE_PRODUCT,productID)
}