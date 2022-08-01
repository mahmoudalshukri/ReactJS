import { useReducer } from "react";
function init(state){
    return{
        count: state
    }
}
function countReducer(state, action){
    if(action.type === 'PLUS')
        return {count: state.count + action.payload};
    if(action.type === 'MINUS')
        return {count: state.count - 1};
    if(action.type === 'RESET')
        return init(0);
    
    throw new Error(action + " is not define in count reducer")
}
function Count(){
    const [state, dispatch] = useReducer(countReducer, 0, init)
    return(
        <div>
            <h1>Count: {state.count} </h1>
            <button onClick={() => dispatch({type:'PLUS',payload: 2})}>+</button>
            <button onClick={() => dispatch({type:'MINUS'})}>-</button>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}
export default Count;