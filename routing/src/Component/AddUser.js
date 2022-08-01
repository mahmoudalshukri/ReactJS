import {addUser} from "../Api/functions";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserForm from "./UserForm";
import axios from 'axios';
import { Navigate , Route , useNavigate} from 'react-router-dom'
function AddUser (){
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
  addUser(userInfo)
    .then((res) => {
        alert("Successfully Added");
        navigate('/users');
    })
    .catch((err) => alert("Something went wrong"));
};
        return (
        <div>
            <h2>User</h2>
            <UserForm  values={user} onSubmit={onSubmit}/>
        </div>
    )
}
export default AddUser;