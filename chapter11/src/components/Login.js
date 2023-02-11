
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import userContext from '../utils/userContext';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export const Login = () => {
    const UserContext = useContext(userContext);
    const { user, setUser } = UserContext;
    console.log("UserContext", UserContext);
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        const { email, password } = data;
        if (email === "test@gmail.com" && password === "admin123") {
            // localStorage.setItem("isLoggedIn", true);
            setUser({
                email: "test@gmail.com",
                name: "Test"
            })
            navigate(`/`);
        } else {
            alert("Incorrect Email or Password");
        }
    }
    return (
        <div className='flex justify-center items-center h-[100vh] flex-col'>
            <h1 className='font-medium text-2xl'>Login</h1>
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
                    <Form className='flex justify-center items-center flex-col w-full'>
                        <Field className="border p-2 rounded-sm m-2 w-1/3" name="email" type="email" placeholder="Email" />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="email" />
                        </div>
                        <Field className="border p-2 rounded-sm m-2 w-1/3" name="password" type="password" placeholder="Password" />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="password" />
                        </div>
                        <button type="submit" className='border bg-gray-200 p-2 rounded-md'>Submit</button>
                    </Form>

                )}
            </Formik>
        </div>
    )

};
export default Login;