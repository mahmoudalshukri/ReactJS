import { Component } from "react";
import {getUsers} from '../Api/functions'
import {Link} from 'react-router-dom';
class Users extends Component {
    state = {
        users : []
      }
      componentDidMount = () =>{
        getUsers().then(response => {
          this.setState({
            users : response.data
          })
        })
        .catch(erorr => {
          alert("Erorr")
        })
      }
    render(){
        return(
            <div>
                Users Page
                <ul>
                    {this.state.users.map(user => 
                        <li key={user.id}>
                        {user.name}
                        <Link to={'/users/' + user.id}>View</Link>
                        <Link to={'/users/update/' + user.id}>Edit</Link>
                        <button onClick={()=> this.deleteUser(user)}>Delete</button>
                        </li> 
                    )}
                </ul>
            </div>
        )
    }
}
export default Users;