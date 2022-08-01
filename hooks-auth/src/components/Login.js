import { useState, useContext } from "react";
import { AuthContext } from '../AuthContext';
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext)

    function login(e){
        e.preventDefault();
        const token = 'abc'
        if(email === 's@s.com' && password === '123'){
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContext.setAuth({token, email})
        }else{
            alert("Wrong Data")
        }
    }
    return(
        <div>
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email" className="form-control" value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="Password" className="form-control" value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <br />
                <button className="btn btn-success" onClick={login}>Login</button>
            </form>
        </div>
    )
}
export default Login;