import { useEffect, useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handelEmail(e){
        setEmail(e.target.value);
    }
    function handelPassword(e){
        setPassword(e.target.value);
    }
    // did mount
    useEffect(() =>{
        console.log('functoin component did mount');
        return() =>{
            console.log('functoin component will unmount');
        };
    },[])
    // did update
    useEffect(() =>{
        if(email === '')
            return;
        console.log('functoin component did update');
    })
    // on changing the email
    useEffect(() =>{
        if(email === '')
            return;
        console.log('functoin component email did update');
    },[email])
    // on changing the password
    useEffect(() =>{
        if(password === '')
            return;
        console.log('functoin component password did update');
    },[password])
    return (
      <div>
        <input value={email} onChange={handelEmail} placeholder='Email' />
        <input value={password} onChange={handelPassword} placeholder='Password' />
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
      </div>
    );
  }
  
  export default LoginForm;
  