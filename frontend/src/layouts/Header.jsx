import React from 'react'
import {NavLink} from "react-router-dom";



const Header = () => {
  return (
    <header className='sticky bg-gray-200 w-full top-0 border-b-2'>


        <section className='flex w-[90%] m-auto gap-8 text-lg font-bold py-2'>
          {/* <NavLink to="/addingTodo"></NavLink> */}
          <h1 className='text-green-700 hover:text-green-900'>TodoFie</h1>
          <NavLink  to="/"> <h1 className='hover:text-green-700'>Adding Todo</h1></NavLink>
         
          <NavLink  to="/seeTodo"> <h1 className='hover:text-green-700'>See Todo</h1></NavLink>

        
      
    </section>
    
    </header>
  )
}

export default Header