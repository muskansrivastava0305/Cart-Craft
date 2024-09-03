import { ADD_To_Cart} from '../constant.js'
export const addToCart=(data)=>{
    return{
        type: 'Add_to_cart',
        data:data
    }
}

export const removeToCart=(data)=>{
    return{
        type: 'Remove_to_cart',
        data:data
    }
}

// export const removeToCart=(data)