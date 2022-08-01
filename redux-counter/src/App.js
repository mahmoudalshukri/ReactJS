import { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import './App.css';
import Counter from './components/Counter'
class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
