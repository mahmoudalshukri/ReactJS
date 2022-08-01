import { useEffect, useRef, useState } from "react";

function FunctionComponent(){
    const [fName , setFname] = useState('')
    const [lName , setLname] = useState('')
    const fNameRef = useRef()
    const lNameRef = useRef()
    const buttonRef = useRef()
    
    useEffect(() => {
        fNameRef.current.focus();
    },[])
    function onFirstKey (e){
        if(e.key === 'Enter'){
            lNameRef.current.focus();
        }
    }
    function onLastKey (e){
        if(e.key === 'Enter'){
            buttonRef.current.focus();
        }
    }
    function run(){
        console.log({fName,lName})
    }
    return(
        <div>
            <h1>Hello From Function Component</h1> <br />
            <input placeholder="First Name" onKeyDown={onFirstKey} value={fName} onChange={(e) => setFname(e.target.value)} ref={fNameRef}/>
            <input placeholder="First Name" onKeyDown={onLastKey} value={lName} onChange={(e) => setLname(e.target.value)} ref={lNameRef}/>
            <button ref={buttonRef} onClick={run}>Save</button>
        </div>
    )
}
export default FunctionComponent;