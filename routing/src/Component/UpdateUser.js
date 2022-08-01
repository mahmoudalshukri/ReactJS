import {getUser, updateUser} from "../Api/functions";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserForm from "./UserForm";
import axios from 'axios';
import { Navigate , Route , useNavigate} from 'react-router-dom'
function UpdateUser (props){
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      email: "",
    });
//onSubmit handler
const onSubmit = (userInfo) => {
  // axios
  //   .put(
  //     "https://jsonplaceholder.typicode.com/users/" +
  //       id,
  //       userInfo
  //   )
  updateUser(id,userInfo)
    .then((res) => {
      if (res.status === 200) {
        alert("Successfully updated");
        navigate('/users');
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
  // axios
  //   .get(
  //     "https://jsonplaceholder.typicode.com/users/" 
  //     + id
  //   )
  getUser(id)
    .then((res) => {
      const { name, email } = res.data;
      setUser({ name, email });
    })
    .catch((err) => console.log(err));
}, []);
        return (
        <div>
            <h2>User</h2>
            <UserForm  values={user} onSubmit={onSubmit}/>
        </div>
    )
}
export default UpdateUser;