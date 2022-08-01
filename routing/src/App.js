import { Component } from 'react';
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Users from './Component/Users'
import UpdateUser from './Component/UpdateUser'
import AddUser from './Component/AddUser'
import User from './Component/User'
import NotFound from './Component/NotFound'
import './App.css'
const MyNavLink = (props) => <NavLink exact activeClassName="active" {...props}>{props.children}</NavLink>
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <MyNavLink to="/">Home</MyNavLink>
        <MyNavLink to="/about">About</MyNavLink>
        <MyNavLink to="/users">Users</MyNavLink>
        <MyNavLink to="/add">Add User</MyNavLink>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/add' exact element={<AddUser />} />
          <Route path='/users/:id' exact element={<User />} />
          <Route path='/users/update/:id' exact element={<UpdateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
