import { Component, createRef } from "react";

class ClassComponent extends Component{
    constructor(){
        super();
        this.inputRef = createRef();
    }
    run = () =>{
        this.inputRef.current.focus();
    }
    render(){
        return(
            <div>
                <h1>Hello From Class Component </h1> <br />
                <input ref={this.inputRef} />
                <button onClick={this.run} >Click</button>
            </div>
        )
    }
}
export default ClassComponent;