import { ADD_To_Cart } from "./constant"
import rootReducer from "./reducer"

const initialState = {
    cartData:[]
}

export default function cardItem (state = initialState , action){
     switch(action.type){
        case ADD_To_Cart:
            return{
                ...state,
                cartData: action.data
            }
            default:
                return state
     }
}