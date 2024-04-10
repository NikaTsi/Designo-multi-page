import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burgerMenu from '../assets/icons/burger-menu.svg';
import cancel from '../assets/icons/cancel.svg';
import data from '../data.json'
import NavigationLinks from './navigationLinks';

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  return (
    <header className={`flex w-full h-24 px-6 py-[35px] items-center justify-between bg-[#FFF] z-10 md:py-16 md:px-10 md:h-auto xl:w-[1111px] xl:px-0 ${menu ? "sticky top-0" : "relative"}`}>

      <Link to={"/"} className='flex gap-4 items-center cursor-pointer'>
        <div className='flex w-6 h-6 bg-logo rounded-[50%]'></div>
        <h1 className='font-bold text-[24px] tracking-[5px] text-[#333136]'>DESIGNO</h1>
      </Link>

      <div className='flex md:hidden'>
        {menu ? <img className='cursor-pointer' onClick={toggleMenu} src={cancel} /> : <img className='cursor-pointer' onClick={toggleMenu} src={burgerMenu} />}

        <div className='hidden font-normal text-[14px] leading-[14px] tracking-[2px] text-[#333136]'>
          <NavigationLinks data={data.navbar} />
        </div>

      </div>

      {menu && (
        <div className='flex flex-col absolute w-full h-full top-full left-0 md:hidden'>
          <div className='flex flex-col w-full px-6 py-12 gap-8 bg-[#1D1C1E] text-[#FFF] text-[24px] font-normal leading-[25px] tracking-[2px]'>
            <NavigationLinks data={data.navbar} />
          </div>
          <div className='flex w-full min-h-[100vh] opacity-50 bg-[#000]'></div>
        </div>)}

      <div className='hidden gap-[42px] md:flex'>
        {data.navbar.map(item => (
          <Link key={item.url} to={`${item.url}`} className='text-[14px] text-[#333136] font-normal tracking-[2px] hover:underline hover:drop-shadow-text'>{item.title}</Link>
        ))}
      </div>

    </header>
  );
}
