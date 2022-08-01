import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      { visible ? <>
      <LoginForm />
      </>:null}
      <button onClick={()=> setVisible(!visible)}>Toggle</button>
    </div>
  );
}

export default App;
