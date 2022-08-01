import { Component } from "react";
import ThemeContext from "../Context/ThemeContext";
class ToggleBtn extends Component {
    render(){
        return (
            <div>
                <button onClick={this.context.toggleTheme}>
                    Toggle Theme To {this.context.theme === 'dark' ? 'light' : 'dark'}
                </button>
            </div>
          );
    }
  }
  ToggleBtn.contextType = ThemeContext;
  export default ToggleBtn;
  