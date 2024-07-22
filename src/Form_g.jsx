import React from 'react'
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
const schema=yup.object().shape({
  name:yup.string().lowercase().required("This section is necessary"),
  email:yup.string().lowercase().required("This section is necesary").email("enter a valid email"),
  password:yup.string().required("this section is necessary").min(3,"must contain atleast 3 letters").max(8,"must not more than 8 letters"),
});

 const Forms = () => {

  
  return (
    <>
    <Formik 
initialValues={{
  name:'',
  email:'',
  password:'',

  

}}

validationSchema={schema}

onSubmit={(values)=>{
  console.log(values)
}}

>
{({handleSubmit ,values ,setFieldValues})=>{
  return(
    
 <Form onSubmit={handleSubmit}>
    <div className='text-white font-bold  text-3xl  grid justify-center bg-red-500 items-center'>
<h1 className='mt-8'>WELCOME TO LOGIN PAGE</h1>
<div className='grid grid-cols-2 h-fit mt-20'>
<div className='bg-white  text-green-400 p-5 flex justify-center items-center border-2 border-gray-200'>WELCOME !</div>
<div className='w-fit  bg-white grid gap-10    p-3'>
  <h1 className=' mb-5 text-red-300 flex justify-center'>LOGIN HERE!</h1>
  <div className="  text-black font-bold ">
              <label className="text-gray-950 m-7 ">NAME </label>
              <Field
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="border-2 border-black rounded-md outline-none p-2 w-full mb-5"
              />
                  <ErrorMessage name="name" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              
<div className="text-black  font-bold ">
              <label className="text-gray-950 m-7">Email </label>
              <Field
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="border-2 border-black text-black rounded-md outline-none p-2 w-full "
              />
               <ErrorMessage name="email" className="text-red-500 text-sm capitalize" component={'div'} />
</div>
<div className="text-black font-bold ">
              <label className="text-gray-950 m-7">Password </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="border-2 border-black rounded-md outline-none p-2 w-full mb-5"
              />
               <ErrorMessage name="password" className="text-red-500 text-sm capitalize" component={'div'} />
</div>
<ReCAPTCHA sitekey='6LcrKX8pAAAAAHep-459_Oarlvh2EJRythBl9QI0'onChange={e=>{
  console.log(e)
}}/>
<button className='text-black    bg-green-400 px-2 py-2  rounded-md w-44'>Login</button>
</div>
</div>
</div>
</Form>
  )
}}

    
</Formik>
    
    </>
  )
}
export default Forms;