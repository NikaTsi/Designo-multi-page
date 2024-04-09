import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLinks from './navigationLinks';
import data from '../data.json';

export default function Footer({value}) {

  const renderInfo = data.footer.contact.map((item, i) => (
    <div className='flex flex-col opacity-50 text-[16px] leading-[26px]' key={i}>
      <h5 className='font-bold'>{item.title}</h5>
      <p className='font-normal'>{item.paragraph}</p>
      <p className='font-normal'>{item.info}</p>
    </div>
  ))

  const renderSvg = data.footer.svg.map((item, i) => (
    <a href={`${item.href}`} target={`item` + `${i}`} key={i}>
      <svg className='fill-[#E7816B] cursor-pointer hover:fill-[#FFAD9B] flex' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox={`${item.viewbox} 0 24 24`}>
        <path fillRule="evenodd" clipRule="evenodd" d={`${item.d}`} />
      </svg>
    </a>
  ))

  return (
    <footer className='flex relative flex-col w-full text-center items-center'>

      <div className={`flex-col absolute items-center mx-6 px-6 py-16 gap-8 rounded-[15px] bg-[#E7816B] top-[-190px] bg-basicBackground bg-no-repeat bg-cover md:mx-10 md:px-[58px] md:py-[57px] md:top-[-264px] xl:w-[1111px] xl:flex-row xl:justify-between xl:py-[72px] xl:px-[95px] xl:top-[-220px] ${value ? "hidden" : "flex"}`}>
        <div className='flex flex-col gap-[6px] md:gap-0 xl:w-[450px] xl:text-start'>
          <h4 className="font-medium text-[32px] leading-[36px] text-[#FFF] md:text-[48px] md:px-[100px] md:leading-none xl:p-0 xl:w-[350px]">Let’s talk about your project</h4>
          <p className="font-normal text-[15px] leading-[25px] text-[#FFF] mt-[14px] mb-6 md:text-[16px] md:leading-[26px] md:mb-0 ">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <Link to={"/contact"}>
          <button className="font-medium text-[15px] tracking-[1px] text-[#333136] w-[152px] h-14 bg-[#FFF] rounded-[8px] cursor-pointer hover:bg-[#FFAD9B] hover:text-[#FFF] duration-300">GET IN TOUCH</button>
        </Link>
      </div>

      <div className={`flex flex-col w-full items-center pb-16 px-6 bg-[#1D1C1E] text-[#FFF] md:px-10 md:pb-20 ${value ? "pt-[64px]" : "pt-[253px] md:pt-[150px] "}`}>

        <div className='flex flex-col w-full items-center md:flex-row md:justify-between xl:w-[1111px]'>

          <Link to={"/"} className='flex gap-4 items-center cursor-pointer'>
            <div className='flex w-6 h-6 bg-logo rounded-[50%]'></div>
            <h1 className='font-bold text-[24px] tracking-[5px]'>DESIGNO</h1>
          </Link>

          <div className='flex w-full px-6 opacity-10 border-t mt-8 md:hidden'></div>

          <div className='flex flex-col font-normal text-[14px] leading-[14px] tracking-[2px] gap-8 pt-8 pb-10 md:flex-row'>
            <NavigationLinks data={data.navbar} />
          </div>

        </div>

        <div className='hidden w-full opacity-10 border-t mt-4 md:flex md:mb-[31px] xl:w-[1111px]'></div>

        <div className='flex flex-col w-full gap-10 md:flex-row md:text-start md:justify-between xl:w-[1111px]'>
          {renderInfo}
          <div className='flex w-full justify-center gap-4 md:justify-normal md:items-end md:w-auto'>
            {renderSvg}
          </div>

        </div>

      </div>
    </footer>
  )
}
