import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Location from '../components/locations';
import Form from '../components/form';

const Contact = () => {

  return (
    <main className='flex flex-col w-full h-auto items-center font-Jost'>
      <Navbar />

      <section className='flex flex-col w-full md:px-10 xl:items-center'>

        <div className='flex flex-col w-full items-center bg-[#E7816B] bg-oval bg-no-repeat gap-12 px-6 py-[72px] md:rounded-[15px] md:px-[58px] md:py-[71px] md:bg-[top_calc(-100px)_left_calc(-150px)] xl:flex-row xl:px-[95px] xl:py-[55px] xl:w-[1111px] xl:gap-[100px] xl:bg-[left_top_calc(-150px)]'>

          <div className='flex flex-col text-[#FFF] text-center gap-6 md:text-start md:gap-8 '>
            <h1 className='text-[32px] font-medium leading-[36px] md:text-[48px] md:leading-none'>Contact Us</h1>
            <p className='text-[15px] font-normal leading-[25px] md:text-[16px] md:leading-[26px] xl:w-[450px]'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
          </div>

          <Form />

        </div>

      </section>

      <Location />

      <Footer value={true} />
    </main>
  )
}

export default Contact