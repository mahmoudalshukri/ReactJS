import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
function Header(){
    const authContext = useContext(AuthContext)
    function logout(){
        authContext.setAuth({})
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
    return(
        <div>
            <nav className="navbar bg-light mt-2 mb-2">
                <div className="container-fluid">
                    <a className="navbar-brand h1">React Hooks</a>
                {authContext.auth.email ? 
                    <div>
                        {authContext.auth.email} {' '} <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
                    </div> : "You Need To Login"}
                </div>
            </nav>
        </div>
    )
}
export default Header;