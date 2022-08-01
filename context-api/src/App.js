import One from "./components/One";

import { Component } from "react";
import ThemeContext from './Context/ThemeContext'
class App extends Component {
  state = {
    theme : 'dark'
  }
  toggleTheme = () =>{
    this.setState({
      theme : this.state.theme === 'dark' ? 'light' : 'dark'
    })
  }
  render(){
    return (
      <ThemeContext.Provider value = {{
        'theme': this.state.theme,
        'toggleTheme': this.toggleTheme
      }}>
      <div style={{background: this.state.theme === 'dark' ? '#555' : '#999'}}>
        <h1>Hello From App</h1>
        <One />
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
