import React, { useState } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { setShowPassword } from '../store/userSlice';

const SignInBox = () => {

    // redux
    const dispatch = useDispatch();

    const showPassword = useSelector((state) => state.user.showPassword);

    const submitLogin = async (values) => {
        console.log(values)
    }

    // Yup validation schema structure
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .required("Email is required")
        .email("Enter correct email")
        .min(3, "Email must be at least 3 characters"),
        password: Yup.string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters"),
    });

  return (
    <div className='border border-blue-200 rounded-md shadow-lg w-1/2 lg:w-1/4 mx-auto p-4 my-10 bg-white'>
        <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => submitLogin(values)}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center -mb-8">
                        <div className='flex flex-col justify-center items-center -space-y-4'>
                            <p className='text-lg font-semibold'>Sign In to</p>
                            <img src='/logo1.png' width={150} height={150} />
                        </div>
                    </div>
                    <InputComp 
                        label={"Email"}
                        type={"email"}
                        id={"email"}
                        placeholder={"Email"}
                        value={values.email}
                        onChange={handleChange}
                    />
                    {/* If validation is not passed show errors */}
                    <div className="error text-red-500" style={{ fontSize: "12px" }}>
                    {(errors.email && touched.email && errors.email) || (
                        <p>&nbsp;</p>
                    )}
                    </div>
                    <InputComp 
                        label={"Password"}
                        type={showPassword ? "text": "password"}
                        id={"password"}
                        placeholder={"Password"}
                        value={values.password}
                        onChange={handleChange}
                    />
                    <div className="error text-red-500" style={{ fontSize: "12px" }}>
                    {(errors.password && touched.password && errors.password) || (
                        <p>&nbsp;</p>
                    )}
                    </div>
                    <div>
                        <p className='underline text-xs sm:text-sm hover:cursor-pointer'>Forgot Password?</p>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button type='submit' className='bg-blue-900 text-white p-2 rounded-md hover:bg-cyan-600 w-full'>Sign In</button>
                    </div>
                </form>
            )}
        </Formik>
    </div>
  )
}

export default SignInBox

const InputComp = ({label, type, id, placeholder, value, onChange}) => {

    const dispatch = useDispatch();

    const showPassword = useSelector((state) => state.user.showPassword);

    return (
        <div className='flex flex-col'>
            <label className='font-semibold'>{label}</label>
            <div className={`${id === "password" ? "flex" : ""}`}> 
                <input 
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    autoComplete={"off"}
                    className={`border p-1 focus:outline-none w-full ${id == "password" ? "rounded-s-md" : "rounded-md" }`}
                    autoCorrect='false'
                    value={value}
                    onChange={onChange}
                    maxLength={30}
                />
                {
                    id === "password"
                    &&
                    <button
                        className="bg-gray-300 rounded-e w-10 flex justify-center items-center"
                        type="button"
                        id="password-visible"
                        onClick={() => dispatch(setShowPassword(!showPassword))}
                      >
                        {
                            showPassword 
                            ? 
                                <svg
                                    className="w-4 h-4 text-black dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 14"
                                    >
                                    <g
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                    >
                                        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                    </g>
                                </svg>
                            :   
                                <svg
                                    className="w-4 h-4 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 18"
                                >
                                    <path
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                        }
                        
                    </button>
                }
            </div>
        </div>
    )
}