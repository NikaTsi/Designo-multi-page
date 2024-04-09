import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardLinks from '../components/cardLinks';
import data from "../data.json"


const WebDesign = () => {

    const cards = data.webDesign.map((item, i) => (
        <div className='flex flex-col w-[327px] bg-[#FDF3F0] rounded-[15px] overflow-hidden cursor-pointer' key={i}>
            <img className='w-[328px]' src={require(`../assets${item.image}`)} />
            <div className='flex flex-col text-center px-[30px] py-8 gap-4 '>
                <h3 className='font-medium text-[#E7816B] text-[20px] leading-[26px] tracking-[5px]'>{item.heading}</h3>
                <p className='font-normal text-[#333136] text-[16px] leading-[26px]'>{item.paragraph}</p>
            </div>
        </div>
    ))

    return (
        <main className='flex flex-col w-full h-auto font-Jost items-center'>
            <Navbar />

            <section className='flex flex-col w-full md:px-10 items-center'>

                <div className='flex flex-col items-center text-[#FFF] w-full px-6 py-[105px] gap-6 text-center bg-[#E7816B] bg-basicBackground bg-no-repeat bg-cover md:rounded-[15px] md:py-[64px] xl:w-[1111px]'>
                    <h1 className='text-[32px] font-medium leading-9 md:text-[48px] md:leading-none'>Web Design</h1>
                    <p className='text-[15px] font-normal leading-[25px] md:text-[16px] md:leading-[26px] md:w-[400px]'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </div>

                <div className='flex w-full flex-wrap gap-10 px-6 py-24 justify-center md:px-0 md:py-[120px] xl:w-[1111px]'>
                    {cards}
                </div>

            </section>

            <div className="flex w-full flex-col items-center text-center px-6 gap-6 text-[#FFF] mb-[384px] md:px-10 xl:w-[1111px] xl:px-0 xl:flex-row">
                <CardLinks values={["APP DESIGN", "GRAPHICS DESIGN"]} />
            </div>

            <Footer />
        </main>
    )
}

export default WebDesign