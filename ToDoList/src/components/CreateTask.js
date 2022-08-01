import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function CreateTask(props){
    return(
      <div className='container'>
        <div className='row'>
            <InputGroup className="mb-3 col-12" value={props.value} onChange={props.onChange}>
            <InputGroup.Text id="basic-addon1">New Task</InputGroup.Text>
            <Form.Control
            placeholder="Enter Task Here"
            />
            </InputGroup>
            <Button onClick={props.addTask} variant="primary" className='col-12'>Add</Button>
        </div>
      </div>
    )
  }
export default CreateTask;