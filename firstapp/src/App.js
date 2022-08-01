import './App.css';
import Hello from  './components/hello';
import Welcome from './components/welcome';
import List from './components/list';
import Conditions from './components/conditions';
import LifeCycle from './components/lifeCycle';

function App() {
  
  return (
    <div className="App">
      <Hello firstName="Mahmoud" lastName="Alshukri">Age: 20</Hello>
      <Welcome firstName="Mahmoud" lastName="Alshukri"/>
      <List/>
      <Conditions/>
      <LifeCycle/>
    </div>
  );
}

export default App;
