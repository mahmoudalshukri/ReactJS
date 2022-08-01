import { Component } from 'react';
import {Formik, Field ,ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';
class App extends Component {
  onSubmit = (values) =>{
    console.log(values)
  }
  form = (props) =>{
    return(
      <form onSubmit={props.handleSubmit}>
        <label>Name:</label><br/>
        <Field name = "name"/><br/>
        <ErrorMessage name='name'/><br/>
        <label>Email:</label><br/>
        <Field name = "email"/><br/>
        <ErrorMessage name='email'/><br/>
        <label>Type:</label><br/>
        <Field name = "type" component="select">
          <option value="1">One</option>
          <option value="w">Two</option>
        </Field><br/>
        <ErrorMessage name='type'/><br/>
        <label>Active:</label><br/>
        <Field name = "active" type="checkbox" /><br/>
        <label>Category:</label><br/>
        <Field name = "category" type="radio" value="1"/> 1<br/>
        <Field name = "category" type="radio" value="2"/> 2 <br/>
        <ErrorMessage name='category'/><br/>
        <label>Facebook:</label><br/>
        <Field name = "social.facebook"/><br/>
        <ErrorMessage name='social.facebook'/><br/>
        <label>Twitter:</label><br/>
        <Field name = "social.twitter"/><br/>
        <ErrorMessage name='social.twitter'/><br/>
        <FieldArray
          name="friends"
          render = { arrayHelper => (
            <div>
              <h3>Friends</h3>
              {
                props.values.friends.map((item,index) =>(
                  <div key={index}>
                    <Field name={`friends.${index}`} />
                    <ErrorMessage name={`friends.${index}`}/>
                    <button type='button' onClick={()=>arrayHelper.remove(index)}>-</button>
                  </div>
                  
                )
                )
              }
              <button type='button' onClick={()=>arrayHelper.push("")}>+</button>
            </div>
          )
          } />
          <FieldArray
          name="phones"
          render = { arrayHelper => (
            <div>
              <h3>Phone Numbers</h3>
              {
                props.values.phones.map((item,index) =>(
                  <div key={index}>
                    <Field name={`phones.${index}.number`} placeholder="number"/>
                    <ErrorMessage name={`phones.${index}.number`}/><br/>
                    <Field name={`phones.${index}.extinsion`} placeholder="extinsion"/>
                    <ErrorMessage name={`phones.${index}.extinsion`}/><br/>
                    <button type='button' onClick={()=>arrayHelper.remove(index)}>-</button>
                  </div>
                  
                )
                )
              }
              <button type='button' onClick={()=>arrayHelper.push({number:'',extinsion:''})}>+</button>
            </div>
          )
          } />
        <button>Send</button>
      </form>
    )
  }
  schema = () =>{
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      type: Yup.string().required(),
      category: Yup.string().required(),
      social: Yup.object().shape({
        facebook: Yup.string().required("facebook is required"),
        twitter: Yup.string().required("twitter is required"),
      }),
      friends: Yup.array().of(
        Yup.string().required("Empty Field")
      ),
      phones: Yup.array().of(
        Yup.object().shape({
          number: Yup.number().typeError('accept numbers only').required("required"),
          extinsion: Yup.number().typeError('accept numbers only').required("required"),
        })
        ),
    });
    return schema;
  }
  render(){
    return (
      <div className="App">
        <Formik 
          initialValues={{
          name : "",
          email : "",
          type : "",
          active : false,
          category : "",
          social : {
            facebook: '',
            twitter : '',
          },
          friends:['M','H'],
          phones:[
            {number:"11111",extinsion:"00000"},
            {number:"22222",extinsion:"33333"},
          ],
        }}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}
        />
      </div>
    );
  }
}
export default App;
