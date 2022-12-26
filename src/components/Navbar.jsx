import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)




  return (
    <nav className='w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3F3E45] '>
      <img src={logo} alt="hooBank" className='w-[124px] h-[32px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white font-normal cursor-pointer hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-[16px]`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle(prev => !prev)}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >

          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white font-normal alin cursor-pointer ${index === navLinks.length - 1 ? 'mb-2' : 'mb-10'} text-[16px]`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar