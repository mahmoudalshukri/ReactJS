import { Component } from "react";
class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            time : new Date
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time : new Date
            });
            
        },1000)
    }

    render(){
        return(
            <div>
                Time Now: {this.state.time.toLocaleDateString()}
            </div>
        )
    }
}
export default LifeCycle