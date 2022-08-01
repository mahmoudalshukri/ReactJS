import { useContext } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import Header from './components/Header'
import Login from './components/Login'
function App() {
  const authContext = useContext(AuthContext)
  return (
    <div className="container">
      <Header />
      {authContext.auth.email ?'Welcome' : <Login />  }
    </div>
  );
}
function AppWithStore(){
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
export default AppWithStore;
