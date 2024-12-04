import React from 'react'
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center text-center text-black'>
      <div>
        <h2 className="text-5xl font-poppins text-primary capitalize font-medium">Oops!</h2>
        <p className="py-4 capitalize text-black font-medium">Page Not Found</p>
        <NavLink to={'/'} className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-base font-medium">Back Home </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage