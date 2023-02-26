
import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
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
    const [testCreds, setTestCreds] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const { user, setUser } = UserContext;

    const navigate = useNavigate();
    const handleSubmit = (data, resetForm) => {
        const { email, password } = data;
        if (email === "test@gmail.com" && password === "admin123") {
            // localStorage.setItem("isLoggedIn", true);
            setUser({
                email: "test@gmail.com",
                name: "Test"
            })
            navigate(-1);
        } else {
            setError("Incorrect Email or Password");
            resetForm();
            setTestCreds({ email: "", password: "" })
            setTimeout(() => {
                setError("");
            }, 3000)
        }
    }
    const insertTestCreds = () => {
        setTestCreds({ email: "test@gmail.com", password: "admin123" })
    }
    return (
        <div className='flex justify-center items-center h-[100vh] flex-col bg-gradient-to-r from-[#A1FFCE] to-[#FAFFD1]"'>
            <Link to={"/"}><div className='font-logo text-5xl p-4' data-testid="logo">FoodieWoodie</div></Link>
            <h1 className='font-medium text-2xl mb-4'>Login</h1>
            <Formik
                initialValues={{
                    email: testCreds?.email,
                    password: testCreds?.password
                }}
                validationSchema={SignInSchema}
                onSubmit={(values, { resetForm }) => {
                    // same shape as initial values

                    handleSubmit(values, resetForm);
                }}
                enableReinitialize
            >
                {({ errors, touched }) => (
                    <>
                        <Form className='flex justify-center items-center flex-col w-full'>
                            <Field className="border p-2 rounded-md my-3 w-1/3" name="email" type="email" placeholder="Email" />
                            <div className="errMsg">
                                <ErrorMessage className='text-red-200' name="email" />
                            </div>
                            <Field className="border p-2 rounded-md my-3 w-1/3" name="password" type="password" placeholder="Password" />
                            <div className="errMsg">
                                <ErrorMessage className='text-red-200' name="password" />
                            </div>
                            <button type="submit" className='text-base border p-2 my-3 rounded-md bg-[#FAFFD1]'>Submit</button>
                            <button type="button" onClick={insertTestCreds} className='text-base border p-2 rounded-md bg-[#FAFFD1]'>Use test credentials</button>
                            {
                                error?.length > 0 &&
                                <div className="flex mt-3 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">{error} !</span> Please try with correct credentials.
                                    </div>
                                </div>
                            }
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    )

};
export default Login;