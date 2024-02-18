import { Form, Formik } from 'formik';
import './App.css';

export default function LoginComponent(){
    const email = ''
    const password = ''
    return(
        <div className="parent-container">
            <Formik>
                <Form className="form-box">
                <div className="header-text">
                    Login Form
                </div>
                    <input placeholder="Your Email Address" type="text"/> 
                    <input placeholder="Your Password" type="password"/> 
                    <button>login</button>
                </Form>
            </Formik>
        </div>
    );
}