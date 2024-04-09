import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import aboutUs from '../assets/images/aboutUs/aboutUs.svg'
import aboutUsTablet from '../assets/images/aboutUs/aboutUs-tablet.svg'
import aboutUsDesktop from '../assets/images/aboutUs/aboutUs-desktop.svg'
import realDeal from '../assets/images/aboutUs/realDeal.svg'
import realDealTablet from '../assets/images/aboutUs/realDeal-tablet.svg'
import realDealDesktop from '../assets/images/aboutUs/realDeal-desktop.svg'
import worldClass from '../assets/images/aboutUs/worldClass.svg'
import worldClassTablet from '../assets/images/aboutUs/worldClass-tablet.svg'
import worldClassDesktop from '../assets/images/aboutUs/worldClass-desktop.svg'
import Location from '../components/locations'

const AboutUs = () => {
    return (
        <main className='flex flex-col w-full h-auto items-center font-Jost'>
            <Navbar />

            <section className='flex flex-col w-full md:px-10 xl:items-center'>
                
            <div className='flex flex-col w-full bg-[#E7816B] bg-oval bg-no-repeat rounded-[15px] overflow-hidden md:mb-[120px] xl:flex-row-reverse xl:w-[1111px] xl:mb-40 xl:bg-[bottom_left]'>
                <img className='w-full h-[320px] object-cover md:hidden' src={aboutUs} />
                <img className='hidden w-full h-[320px] object-cover md:flex xl:hidden' src={aboutUsTablet} />
                <img className='hidden h-[480px] w-[476px] xl:flex' src={aboutUsDesktop} />
                <div className='flex flex-col text-[#FFF] text-center gap-6 py-20 px-6 md:py-[64px] md:px-[58px] md:gap-8 xl:py-[135px] xl:gap-8 xl:pl-[95px] xl:pr-[82px] xl:text-start'>
                    <h1 className='text-[32px] font-medium leading-[36px] md:text-[48px] md:leading-[48px]'>About Us</h1>
                    <p className='text-[15px] font-normal leading-[25px] md:text-[16px] md:leading-[26px]'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </div>
            </div>

            <div className='flex flex-col w-full bg-aboutUsBackground2 bg-no-repeat bg-cover bg-[#FDF3F0] rounded-[15px] overflow-hidden xl:flex-row xl:w-[1111px]'>
                <img className='w-full h-[320px] object-cover md:hidden' src={worldClass} />
                <img className='hidden w-full h-[320px] object-cover md:flex xl:hidden' src={worldClassTablet} />
                <img className='hidden h-[640px] w-[476px] xl:flex' src={worldClassDesktop} />
                <div className='flex flex-col text-center gap-6 py-20 px-6 md:py-[68px] md:px-[58px] xl:py-[154px] xl:pl-[94px] xl:pr-[96px] xl:text-start'>
                    <h1 className='text-[32px] text-[#E7816B] font-medium leading-[36px] md:text-[48px] md:leading-[48px]'>World-class talent</h1>
                    <p className='text-[15px] text-[#333136] font-normal leading-[25px] md:text-[16px] md:leading-[26px]'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. <br /> <br /> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </div>

            <Location />

            <div className='flex flex-col w-full bg-aboutUsBackground2 mb-[310px] bg-no-repeat bg-cover bg-[#FDF3F0] rounded-[15px] overflow-hidden md:mb-[384px] xl:flex-row-reverse xl:w-[1111px]'>
                <img className='w-full h-[320px] object-cover md:hidden' src={realDeal} />
                <img className='hidden w-full h-[320px] object-cover md:flex xl:hidden' src={realDealTablet} />
                <img className='hidden h-[640px] w-[476px] xl:flex' src={realDealDesktop} />
                <div className='flex flex-col text-center gap-6 pt-20 pb-[105px] px-6 md:pt-[64px] md:pb-[94px] md:px-[58px] xl:py-[154px] xl:px-[95px] xl:text-start'>
                    <h1 className='text-[32px] text-[#E7816B] font-medium leading-[36px] md:text-[48px] md:leading-[48px]'>The real deal</h1>
                    <p className='text-[15px] text-[#333136] font-normal leading-[25px] md:text-[16px] md:leading-[26px]'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /> <br /> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>

            </section>

            <Footer />
        </main>
    )
}

export default AboutUs