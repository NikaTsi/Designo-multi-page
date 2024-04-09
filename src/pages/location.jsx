import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import data from '../data.json'

const Location = () => {
    const flexDirection = [`md:flex-row-reverse`, `md:flex-row`, `md:flex-row-reverse`]

    const cards = data.location.map((item, i) => (
        <div className={`flex flex-col w-full sm:gap-6 xl:w-[1111px] ${flexDirection[i]}`} key={i}>
            <iframe title="Location Map" className='w-full h-[320px] sm:rounded-[15px] sm:h-[422px] lg:w-[350px] lg:h-[326px]' src={item.mapSrc} allowFullScreen loading={"async"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
            <div className='flex w-full flex-col gap-6 py-20 px-6 bg-aboutUsBackground2 bg-cover bg-no-repeat bg-center sm:rounded-[15px] sm:px-[75px] sm:py-[88px] sm:text-start md:px-[30px] lg:h-[326px] xl:px-[95px]'>
                <h1 className='text-[#E7816B] font-medium text-[36px] sm:text-[40px] sm:leading-[48px]'>{item.heading}</h1>
                <div className='flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
                    <div className='sm:w-[255px]'>
                        <span className='font-bold'>Designo Central Office</span>
                        <p className='font-normal'>{item.address}</p>
                        <p className='font-normal'>{item.location}</p>
                    </div>
                    <div className='sm:w-[255px]'>
                        <span className='font-bold'>Contact</span>
                        <p className='font-normal'>{item.phone}</p>
                        <p className='font-normal'>{item.mail}</p>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <main className='flex flex-col w-full items-center font-Jost'>
            <Navbar />

            <div className='flex flex-col gap-10 w-full mb-[310px] text-center sm:px-6 sm:gap-[120px] md:gap-8 md:mb-[380px] xl:items-center'>
                {cards}
            </div>

            <Footer />
        </main>
    )
}

export default Location;