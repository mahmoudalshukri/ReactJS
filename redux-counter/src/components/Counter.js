import { Component } from "react";
import {connect} from 'react-redux';
class Counter extends Component{

    render(){
        return(
            <div>
                Counter: {this.props.counter}
                <div>
                    <button onClick={this.props.plus}>+</button>
                    <button onClick={this.props.minus}>-</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        counter : state.counter
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        plus : () => dispatch ({type: 'plus'}),
        minus : () => dispatch ({type: 'minus'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);