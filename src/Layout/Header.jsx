import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 pt-4 pb-4">
      <nav className="container mx-auto flex justify-between items-center pu-4">
      <a href="/"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Protfilio</span></a>
        <ul className="flex items-center gap-8 font-poppins">
        <li className="text-white font-bold hover:text-purple-600"><NavLink to="/">Home</NavLink></li>
        <li className="text-white font-bold hover:text-purple-600"><NavLink to={`ServicePage`}>Services</NavLink></li>
          <li className="text-white font-bold hover:text-purple-600"><NavLink to={`BlogPage`}>Blog</NavLink></li>
          <li className="text-white font-bold hover:text-purple-600"><NavLink to={`contactpage`}>Contact</NavLink></li>
        </ul>
        <a className="text-white capitalize bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-3 text-center me-2 flex items-center gap-2" href="/errorpage">login <span className="text-2xl"><MdArrowRightAlt/>
        </span></a>

      </nav>
      
    </header>
  );
};


export default Header;
