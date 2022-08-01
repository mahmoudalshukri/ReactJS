import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function UserForm (props){
    const schema = Yup.object().shape({
        name:Yup.string().required(),
        email:Yup.string().email().required(),
    })
    return(
        <Formik 
            initialValues={props.values}
            onSubmit={props.onSubmit}
            validationSchema = {schema}
            enableReinitialize = {true}
            render={props=>{
                return(
                    <Form>
                        <label>Name:</label><br/>
                        <Field name="name" /><br/>
                        <ErrorMessage name="name" />
                        <label>Email:</label><br/>
                        <Field name="email" /><br/>
                        <ErrorMessage name="email" />
                        <button type="submit">Send</button>
                    </Form>
                )
            }}
        />
    )
}