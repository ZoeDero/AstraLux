import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='flex items-center  mb-0 pb-2'>
      {/* <ul className='text-center text-lg font-medium text-gray-800 hover:text-gray-500  mx-auto p-0 m-6'>
        <li><NavLink to="/home" className="text-gray-800  hover:text-gray-500">Home</NavLink></li>
        <li><NavLink to="/galerie" className="text-gray-800  hover:text-gray-500">Galerie</NavLink></li>
        <li><NavLink to="/contact" className="text-gray-800  hover:text-gray-500">Contact</NavLink></li>
        <li><NavLink to="/infos" className="text-gray-800 hover:text-gray-500">Informations</NavLink></li>
      </ul>
    <a href="#top" className='pr-12  text-gray-800 absolute bottom-30 right-0 hover:text-gray-500'><BsFillArrowUpCircleFill size={40} /></a> */}
    </div>
  )
}
