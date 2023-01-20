
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        const { email, password } = data;
        if (email === "test@gmail.com" && password === "admin123") {
            localStorage.setItem("isLoggedIn", true);
            navigate(`/`);
        } else {
            alert("Incorrect Email or Password");
        }
    }
    return (
        <div className='login-form'>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='loginForm'>
                        <Field name="email" type="email" placeholder="Email" />
                        <div className="errMsg">
                            <ErrorMessage name="email" />
                        </div>
                        <Field name="password" type="password" placeholder="Password" />
                        <div className="errMsg">
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit" className='submit-form'>Submit</button>
                    </Form>

                )}
            </Formik>
        </div>
    )

};
export default Login;