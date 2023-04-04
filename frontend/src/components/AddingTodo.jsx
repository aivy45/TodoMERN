// Here sending data from form to database 

import React, { useState } from 'react'
import axios from 'axios'
import Footer from '../layouts/Footer';
import Egg from '../layouts/Egg';
const AddingTodo = () => {
  const BaseUrl = "https://todo-mern-3h7q.onrender.com";

    const [title, setTitle] = useState("");
    const [task, setTask]= useState("");


  // Not adding the feature that how user get to know whether the data has reached to database or not so here promise vala use hoga

const handlePromise=async (promise)=>{
  let data,error;
  try{
    data=await promise
  }
  catch(err)
  {
   error = err.message;
  }
  return [data,error];
}



//Function to send the data 😊
const sendData= async()=>{
 if(!(title && task))
 {
    alert("Enter Title and tasks")
    return;
 }
 const todo = {
    title,
    tasks:task,
 }
  
  const [,error]= await handlePromise(
   axios.post(`${BaseUrl}/addtodo`, todo)
)
if(!error)
{
  alert("Todo Added, Click on See Todo to See All the Todos")
}
if(error)
{
  alert("Todo Not Created, Error Occured!!!")
}


}

    const submitHandeler=(e)=>{
    e.preventDefault();
    sendData();
    setTask("");
    setTitle("");
    }


  return (
    <>

    <div className='h-[100vh]'>

    <div className='bg-red-200 p-2 h-[70vh]'>
    <section className='w-[90%] m-auto my-10 '>

         
     <form action=""
     onSubmit={submitHandeler}
     >


<div className='flex flex-col gap-10'>

        {/* for add title  */}
     <div className='flex gap-4'>
        <label htmlFor="" className='text-blue-800 font-bold'>Add Title</label>
        <input type="text"  placeholder='Add your title here' 
        className='border-b-4 outline-none px-2 '
        name='title'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
     </div>

     {/* for add tasks  */}
      <div>
        <h2  className='text-blue-800 font-bold'>Add your tasks here</h2>
        <textarea  id="" cols="80" rows="6"
         className='border-2 outline-none p-2 my-2'
          placeholder='Add your tasks here...'
          type="text"
          name="tasks"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
      </div>

      {/* adding button  */}
      <div>
     <button 
     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
    px-4 rounded focus:outline-none focus:shadow-outline lg:tracking-wider'
    type='submit'
    >Add Todo</button>
     </div>

      </div>
    </form>

    </section>
    
    </div>

    <div className=''>
    <Egg/>
    </div>
    


    <Footer/>
 
 
    </div>
  

    </>
  )
}

export default AddingTodo