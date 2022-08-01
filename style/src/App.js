
import { Component } from 'react';
import classNames from 'classnames';
import './App.css';

class App extends Component {
  render(){
    let classes = classNames({
      green : 1 > 0,
      colorWhite : 2 < 4,
      fontBold : 0 != 1,
      fontSize : 8 == 8,
    })
    return (
      <div>
        <div className={classes}>
          Content
        </div>
      </div>
    );
  }
}

export default App;
