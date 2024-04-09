import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import CardLinks from '../components/cardLinks'
import data from '../data.json'

const AppDesign = () => {

    const cards = data.appDesign.map((item, i) => {
        return (
            <div className="flex flex-col w-[327px] overflow-hidden cursor-pointer rounded-[15px]" key={i}>
                <div className="flex w-[327px] justify-center" style={{ background: item.cardBg }}>
                    <img className='w-[327px] ' src={require(`../assets${item.image}`)} />
                </div>
                <div className='flex flex-col text-center px-[30px] py-8 gap-4 bg-[#FDF3F0]'>
                    <h3 className='font-medium text-[#E7816B] text-[20px] leading-[26px] tracking-[5px]'>{item.heading}</h3>
                    <p className='font-normal text-[#333136] text-[16px] leading-[26px]'>{item.paragraph}</p>
                </div>
            </div>
        )
    })

    return (
        <main className='flex flex-col w-full h-auto font-Jost items-center'>
            <Navbar />

            <section className='flex flex-col w-full md:px-10 items-center'>

            <div className='flex flex-col items-center text-[#FFF] w-full px-6 py-[105px] gap-6 text-center bg-[#E7816B] bg-basicBackground bg-no-repeat bg-cover md:rounded-[15px] md:py-[64px] xl:w-[1111px]'>
                <h1 className='text-[32px] font-medium leading-9 md:text-[48px] md:leading-none'>App Design</h1>
                <p className='text-[15px] font-normal leading-[25px] md:text-[16px] md:leading-[26px] md:w-[350px]'>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
            </div>

            <div className='flex w-full flex-wrap gap-10 px-6 py-24 justify-center md:px-0 md:py-[120px] xl:w-[1111px]'>
                {cards}
            </div>

            </section>

            <div className="flex w-full flex-col items-center text-center px-6 gap-6 text-[#FFF] mb-[384px] md:px-10 xl:w-[1111px] xl:px-0 xl:flex-row">
                <CardLinks values={["WEB DESIGN", "GRAPHICS DESIGN"]} />
            </div>

            <Footer />
        </main>
    )
}

export default AppDesign