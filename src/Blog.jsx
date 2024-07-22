import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from 'yup';
import React from 'react'
const schema=yup.object().shape({
name:yup.string().required('this section is required'),
duration:yup.string().required('this section is required'),
category:yup.string().required('this sectionis  required'),
instructor:yup.string().required('this section is required'),
solo:yup.string().required('this section is required')
});

const Blog = () =>{
    const Navigation=useNavigate()
    return(
        <>
        <Formik
        initialValues={{
            name:'',
            duration:'',
            category:'',
            instructor:'',
            solo:''



        }}
        validationSchema={schema}
        onSubmit={(values)=>{
            console.log(values)
          }}
        >
            <form >
        <div>
        <div  className="text-3xl flex justify-center text-yellow-600 rounded-md m-6">Blog</div>
<div className=" bg-slate-50 flex justify-between w-11/12 mx-auto">
        <div className="grid my-4" >
<div className="text-3xl text-pink-700 px-4 py-4 ">Add Courses</div>
<div className=" px-4 pb-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fuga.</div>
        </div>
        <div className="px-8 pt-8">
        <button  className="bg-pink-800 px-2 py-2 text-white rounded-md w-24 ">view</button>
        </div>
        </div>
        <div className="bg-white grid grid-cols-2 w-11/12 px-4  mx-auto ">
  <div className="grid gap-3">
                  <div className="text-xl text-purple-600">Course Name</div>
            <input
                type="text"
                name="name"
                placeholder="Enter  Name"
                className="border-2 border-black rounded-md outline-none p-2 w-10/12 mb-5"
              />
                <ErrorMessage name="name" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              <div className="grid gap-3">
                  <div className="text-xl text-purple-600">Duration</div>
            <input
                type="text"
                name="duration"
                placeholder="Enter Duration"
                className="border-2 border-black rounded-md outline-none p-2 w-10/12 mb-5"
              />
                <ErrorMessage name="duration" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              <div className="grid gap-3">
                  <div className="text-xl text-purple-600">Select Category</div>
            <input
                type="text"
                name="category"
                placeholder="Enter your Name"
                className="border-2 border-black rounded-md outline-none p-2 w-10/12 mb-5"
                
              />
                <ErrorMessage name="category" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              <div>
                  <div className="text-xl text-purple-600">Select Instructor</div>
            <input
                type="text"
                name="instructor"
                placeholder="Enter Name"
                className="border-2 border-black rounded-md outline-none p-2 w-10/12 mb-5"
              />
                <ErrorMessage name="instructor" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              <div className="grid gap-3">
                  <div className="text-xl text-purple-600">Duration</div>
            <input
                type="file"
                name="solo"
                placeholder="Enter your File here"
                className="border-2 border-black rounded-md outline-none p-2  w-10/12 mb-5"
              />
                <ErrorMessage name="solo" className="text-red-500 text-sm capitalize" component={'div'} />
              </div>
              {/* <div>
                      <div className="text-xl text-purple-600 p-5">Course Name</div>
            <input
                type="file"
                name="file"
                placeholder="Choose your file"
                className="border-2 border-black rounded-md outline-none p-4 w-full mb-5"
              />
              </div>
              <div>

              
                            <div className="text-xl text-purple-600 p-5">Course Name</div>
            <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="border-2 border-black rounded-md outline-none p-4 w-full mb-5"
              />
              </div>
              <div>

              
<div className="text-xl text-purple-600 p-5">Course Name</div>
<input
type="text"
name="name"
placeholder="Enter your Name"
className="border-2 border-black rounded-md outline-none p-4 w-full mb-5"
/>
</div> */}
        </div>
        <div className="flex gap-10 bg-white w-11/12 mx-auto px-10 py-10">
        <button  className="bg-pink-800 px-2 py-2 text-white rounded-md w-36 "  onClick={()=>{
            Navigation('/')
        }}>Cancel</button>
        <button  className="bg-pink-800 px-2 py-2 text-white rounded-md w-36 " >Submit</button>
        </div>
        </div>
        </form>
        </Formik>
        </>
    )
}
export default Blog;