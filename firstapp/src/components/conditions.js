function Conditions() {
    const age = 17
    let ageTemplate = ''
    if(age >= 18){
      ageTemplate = <h1>You Can Sign Up In Our Website</h1>
    }else{
      ageTemplate = <h1>You Can Not Sign Up In Our Website</h1>
    }
    return (
      <div>
            {age >= 18 ? <div>You Can Sign Up In Our Website</div>:<div> You Can Not Sign Up In Our Website</div>}
            {ageTemplate}
      </div>
    );
  }
  
export default Conditions;