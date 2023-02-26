import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';
import userContext from '../utils/userContext';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const CheckoutSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
    mobile: Yup.string()
        .matches(phoneRegExp, 'Mobile number is not valid')
        .required('Mobile number is required'),
    address: Yup.string()
        .required('Address is required'),
});

const SuccessAlert = ({ setAlert }) => {
    return (
        <div id="alert-3" className="flex p-4 mt-3 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">
                Order is successfully placed. Please keep your cash ready 😄.
            </div>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close" onClick={() => { setAlert(false) }}>
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    )
}
const CheckoutForm = () => {
    const UserContext = useContext(userContext);
    const { user } = UserContext;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(store => store.cart.items);
    const [alert, setAlert] = useState(false);
    const handleCheckout = (data, resetForm) => {
        const { name, email, mobile, address } = data;
        setAlert(true);
        // setTimeout(() => {
        //     setAlert(false);
        // }, 5000);
        dispatch(clearCart());
        resetForm();
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: user ? user.name : "",
                    email: user ? user.email : "",
                    mobile: '',
                    address: ''
                }}
                validationSchema={CheckoutSchema}
                onSubmit={(values, { resetForm }) => {
                    // same shape as initial values

                    handleCheckout(values, resetForm);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='flex justify-center items-center flex-col w-full pl-3 pr-5'>
                        <Field className="border p-2 rounded-sm m-2 w-[100%] " name="name" type="text" placeholder="Name" />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="name" />
                        </div>
                        <Field className="border p-2 rounded-sm m-2 w-[100%]" name="email" type="email" placeholder="Email" />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="email" />
                        </div>
                        <Field className="border p-2 rounded-sm m-2 w-[100%]" name="mobile" type="text" placeholder="Mobile No." />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="mobile" />
                        </div>

                        <Field className="border p-2 rounded-sm m-2 w-[100%]" name="address" as="textarea" rows="5" placeholder="Address" />
                        <div className="errMsg">
                            <ErrorMessage className='text-red-200' name="address" />
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <div className=" flex justify-start" onClick={() => navigate(-1)}>
                                <span className="border bg-[#FAFFD1] p-1.5 rounded-md flex gap-1 items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                                </svg>
                                    <span>back</span>
                                </span>
                            </div>
                            <button type="submit" className='bg-green-400 px-6 py-2 rounded-md text-white font-bold disabled:cursor-not-allowed' disabled={!cartItems.length > 0}>Place Order</button>
                        </div>
                    </Form>

                )}
            </Formik>
            {alert && <SuccessAlert setAlert={setAlert} />}
        </>
    )
}

export default CheckoutForm