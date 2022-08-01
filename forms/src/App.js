import { Component } from "react";
class App extends Component {
  state = {
    value : 'Deafult',
    selectValue : "2",
    checked : true,
    radioValue: "1"
  }
  setValue = (event) =>{
    const name = event.target.name;
    const type = event.target.type;
    let value = '';
    if(type == "checkbox")
      value = event.target.checked
    else
      value = event.target.value
    this.setState({
      [name] : event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <input name="value" value={this.state.value} onChange={this.setValue} />
        <hr />
        <textarea name="value" value={this.state.value} onChange={this.setValue} />
        <hr />
        <select name="selectValue" value={this.state.selectValue} onChange={this.setSelectValue}>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <hr />
        <label>CheckBox
          <input name="checked" type="checkbox" checked={this.state.checked} onChange={this.setCheckboxValue}/>
        </label>
        <hr />
        <div  onChange={this.setRadioValue}>
          <input name="radioValue" type="radio" value="1" checked={this.state.radioValue == "1"} id="one"/>
          <label htmlFor="one">One</label>
          <input name="radioValue" type="radio" value="2" checked={this.state.radioValue == "2"} id="two"/>
          <label htmlFor="two">Two</label>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
