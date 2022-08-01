import {getUser} from "../Api/functions";
import ViewUser from "./ViewUser";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function User (){
    const {id} = useParams();
    const [user, setUser] = useState([]);
    // const fetchData = async () => {
    //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    //     setUser(data);
    //   };
    //   useEffect(() => {
    //     fetchData();
    //   }, []);
      getUser(id).then(response => {
        setUser(response.data)
      })
      .catch(erorr => {
        alert("Erorr")
      })
        return (
        <div>
            <h2>User</h2>
            <ViewUser user = {user}/>
        </div>
    )
}
export default User;