import { Component } from 'react';
import './App.css';
import Task from './components/Task'
import CreateTask from './components/CreateTask'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    newTask : "",
    tasks : [
      {text : 'Learn React JS'},
      {text : 'Learn Laravel'},
    ]
  }
  completeTask(index){
    const tasks = [...this.state.tasks]
    tasks.splice(index,1)
    this.setState({
      tasks
    })
  }
  updateNewTask = (event) =>{
    this.setState({
      newTask : event.target.value
    })
  }
  addTask = () =>{
    const tasks = [...this.state.tasks]
    tasks.push({
      text: this.state.newTask
    })
    this.setState({
      newTask : "",
      tasks
    })
  }
  render(){
    return (
      <div className="App">
          <div className='container mt-5'>
            <h1 className='text-center'>To Do List</h1>
            {this.state.tasks.map((task, index) =><Task task={task} index={index} completeTask={()=>this.completeTask(index)} key={index}/>)}
            <CreateTask value={this.state.newTask} onChange={this.updateNewTask} addTask={this.addTask}/>
          </div>
      </div>
    );
  }
}

export default App;
