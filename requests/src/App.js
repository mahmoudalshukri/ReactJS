import { Component } from "react";
import ViewUser from "./components/viewUser"
import UserForm from "./components/userForm";
import {getUsers, deleteUsers, updateUser, addUser} from "./API/Users"
class App extends Component {
  state = {
    users : [],
    user : {}
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
  setActive = (user) =>{
    this.setState({
      user : user
    })
  }
  deleteUser = (user) =>{
    // delete from server
    deleteUsers(user.id).then(
      ()=>{
        // delete from state
        let newUsers = this.state.users
        const index = newUsers.indexOf(user)
        newUsers.splice(index, 1)
        this.setState({
          users : newUsers,
      })
      }
    )
    .catch(erorr => {
      alert("Erorr")
    })
  }
  updateUser = (values) =>{
    const id = this.state.user.id
    updateUser(id, values).then(
      ()=>{
        alert("Success")
      }
    )
    
  }
  addUser = (values) =>{
    let newUsers = this.state.users
    newUsers.push(values)
    addUser(values).then(
      ()=>{
        alert("Success")
        this.setState({
          users : newUsers
        })
      }
    )
    .catch(erorr => {
      alert("Erorr")
    })
  }
  render(){
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>
              {user.name}
              <button onClick={()=> this.setActive(user)}>View</button>
              <button onClick={()=> this.deleteUser(user)}>Delete</button>
            </li> 
          )}
        </ul>
        <div>
          <h3>User Deatials</h3>
          {this.state.user.id > 0 ? 
            <ViewUser user = {this.state.user} />
            :"Please select a user"
          }
        </div>
        <div>
          <h3>Edit User</h3>
          {this.state.user.id > 0 ? 
            <UserForm user = {this.state.user}
              values = {this.state.user}
              onSubmit ={this.updateUser}
            />
            :"Please select a user"
          }
        </div>
        <div>
          <h3>Add User</h3>
            <UserForm user = {this.state.user}
              values = {
                {name:'',email:''}
              }
              onSubmit ={this.addUser}
            />
        </div>
        
      </div>
    );
  }
}

export default App;
