import {createStore} from "redux";
const reducers = (state, action) =>{
    switch(action.type){
        case "plus" : return{
            counter : state.counter + 1
        }
        case "minus" : return{
            counter : state.counter - 1
        }
        default : return state;
        
    }
}
const initialState = {
    counter: 5
}
export default createStore(reducers, initialState);






