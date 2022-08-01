import { Component } from "react";
class Welcome extends Component{
    state = {
        weight : 70,
        counter: 0,
        user: {
            firstName : "Mahmoud",
            lastName : "Alshukri"
        }
    }
    decreaseCounter = () =>{
        this.setState({counter: this.state.counter - 1})
    }
    updateWeight(event){
        this.setState({weight: event.target.value})
    }
    updateFirstName(event){
        this.setState({
            user:{
                ...this.state.user,
                firstName: event.target.value
            }
        })
    }
    updateLastName(event){
        this.setState({
            user:{
                ...this.state.user,
                lastName: event.target.value
            }
        })
    }
    render(){
        return(
            <div>
                Welcome {this.props.firstName +" " + this.props.lastName + " "} From Class Component
                <span>Your Weight: {this.state.weight + "kg"}</span>
                <h1>{"Counter:" + this.state.counter}</h1>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase Counter</button>
                <button onClick={this.decreaseCounter}>Decrease Counter</button>
                <input type="text" placeholder="Update your weight" onChange={this.updateWeight.bind(this)}></input>
                <input type="text" placeholder="Update your First Name" onChange={this.updateFirstName.bind(this)} value={this.state.user.firstName}></input>
                <input type="text" placeholder="Update your Last Name" onChange={this.updateLastName.bind(this)} value={this.state.user.lastName}></input>
                <h1>{this.state.user.firstName +" "+ this.state.user.lastName}</h1>
            </div>
        )
    }
}
export default Welcome