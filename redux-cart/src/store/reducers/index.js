import { ADD_TO_CART , CLEAR_CART, REMOVE_FROM_CART} from "../actions/types";
function cartReducer(state, action){
    switch(action.type){
        case ADD_TO_CART:{
            if(action.quantity != 0){
                return [
                        ...state,
                        {
                            product: action.productInfo,
                            quantity: action.quantity
                        }
                    ]
                
            }
        }
        case REMOVE_FROM_CART:{
                const itemIndex = action.index;
                const newState = [...state];
                newState.splice(itemIndex);
                return newState;
        }
        case CLEAR_CART:{
                let newState = [...state];
                newState = [];
                return newState;
        }
        default:
            if(state === undefined)
                return []
            return state;
    }
}
export default cartReducer;