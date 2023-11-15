import React from 'react'
import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const navigateToSISU = () => {
    navigate('/foundation-website-react/signinsignup');
  };

  return (
    <nav className="w-screen flex justify-between items-center px-6 py-2 gap-8 navbar">
      <img src={logo} alt="Foundation Logo" className="w-[80px] h-[110px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={'font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white'}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li><button className='font-poppins font-normal cursor-pointer text-[16px] p-3 mr-6 rounded bg-white' onClick={navigateToSISU}>Sign In/Sign Up</button></li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="Menu Icon"
        className='w-[28px] h-[28px] object-contain'  
        onClick={()=>setToggle((prev)=>!prev)}/>
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li><button className='font-poppins font-normal cursor-pointer text-[16px] p-3 rounded mt-4 bg-white' onClick={navigateToSISU}>Sign In/Sign Up</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar