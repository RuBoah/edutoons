import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center px-6 py-4 bg-transparent text-black">
  <div className="text-xl font-bold">EduToons</div>
 <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/submit">Submit Story</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
  <div className="md:hidden">
    <button className="text-2xl">☰</button>
  </div>
</nav>
    </div>
  )
}

export default Navbar;