// useReducer, useCallback, useMemo 
import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Count from "./Count";
const randomColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const FullName = useMemo(() => 
    <div style={{color: randomColor()}}>{name}</div>,
    [name]
  )

  const [count, setCount] = useState(0);
  function plus (){
    setCount( s => s + 1)
  }
  const plusCallback = useCallback(plus,[])
  return (
    <div>
      <Count />
      <hr />
      <h1>{count}</h1>
      <Button onClick={plusCallback}>
        PLUS
      </Button>
      <hr />
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <h1>Name: {FullName}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
}

export default App;
