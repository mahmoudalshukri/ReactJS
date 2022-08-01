import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Task (props){
    const task = props.task;
    const completeTask = props.completeTask;
    return (
        <div className='container'>
            <div className='row'>
            <h3 className='col-10 mt-2 mb-2'>{task.text}
            </h3>
            <Button onClick={completeTask} variant="success" className='col-2 mt-2 mb-2'>
                Done
            </Button>
            </div>
        </div>
    )
  }
export default Task;