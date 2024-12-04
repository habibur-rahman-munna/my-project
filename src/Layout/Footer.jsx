import React from 'react'

const Footer = () => {
  return (

      

<footer className="bg-gray-900">
    <div className=" container w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Protfilio</span></a>
            <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-white sm:mb-0 dark:text-white">
                <li><a href="/errorpage" className="me-4 md:me-6 hover:text-purple-500">About</a></li>
                <li><a href="/errorpage" className="me-4 md:me-6 hover:text-purple-500">Protfilio</a></li>
                <li><a href="/errorpage" className="me-4 md:me-6 hover:text-purple-500">Service</a></li>
                <li> <a href="/contactpage" className="hover:text-purple-500">Contact</a></li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-base font-medium capitalize text-white sm:text-center dark:text-gray-400">©2024 Munna. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer