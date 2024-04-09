import React from "react";
import { Link } from "react-router-dom";
import phone from "../assets/images/main/phone.svg"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import data from "../data";
import CardLinks from "../components/cardLinks";

const Main = () => {
  const contentDiv = data.main.map((item, i) => (
    <div className="flex flex-col items-center md:flex-row md:gap-12 xl:flex-col" key={i}>
      <img className="h-[202px] w-[202px]" src={require(`../assets${item.image}`)} />
      <div>
        <h4 className="font-medium text-[20px] leading-[26px] tracking-[5px] mt-12 mb-8 md:mt-0 md:mb-4">{item.heading}</h4>
        <p className="font-normal text-[16px] leading-[26px] xl:w-[350px]">{item.description}</p>
      </div>
    </div>
  ))

  return (
    <main className="flex flex-col w-full h-auto font-Jost bg-[#FFF] xl:items-center">

      <Navbar />

      <div className="flex flex-col md:px-10">

        <div className="flex flex-col h-[843px] items-center text-center w-full bg-[#E7816B] bg-oval bg-[left_top_102px] bg-no-repeat px-6 pt-20 overflow-hidden md:rounded-[15px] md:pt-[60px] md:px-[58px] md:bg-[right_calc(-110px)_top_102px] xl:w-[1111px] xl:flex-row xl:items-start xl:text-start xl:justify-between xl:h-[640px] xl:pt-[145px] xl:px-[95px] xl:bg-[top_right]">
          <div className="flex flex-col w-full md:items-center xl:w-[540px] xl:items-start">
            <h1 className="font-medium text-[32px] leading-[36px] text-[#FFF] md:text-[48px] md:leading-none">Award-winning custom designs and digital branding solutions</h1>
            <p className="font-normal text-[15px] leading-[25px] text-[#FFF] mt-[14px] mb-6 md:text-[16px] md:leading-[26px] md:w-4/5 md:mt-2 md:mb-[19px] xl:mt-7 xl:mb-10">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Link to={"/aboutUs"}>
              <button className="font-medium text-[15px] tracking-[1px] text-[#333136] w-[152px] h-14 bg-[#FFF] rounded-[8px] cursor-pointer hover:bg-[#FFAD9B] hover:text-[#FFF] duration-300">LEARN MORE</button>
            </Link>
          </div>
          <div className="pt-20 md:pt-[69px] xl:pt-0">
            <img className="shadow-mobile object-contain rounded-t-[36px]" src={phone} />
          </div>
        </div>

        <div className="flex w-full flex-col items-center text-center px-6 py-[120px] gap-6 text-[#FFF] md:px-0 xl:grid xl:grid-cols-2 xl:gap-[30px] xl:py-40">
          <CardLinks values={["WEB DESIGN", "APP DESIGN", "GRAPHICS DESIGN"]} page={"main"} />
        </div>

      </div>

      <div className="flex w-full flex-col items-center gap-20 text-center px-6 text-[#333136] pb-[311px] md:px-10 md:text-start md:gap-8 md:pb-[331px] xl:flex-row xl:text-center xl:w-[1111px] xl:px-0">
        {contentDiv}
      </div>

      <Footer />
    </main>
  )
}

export default Main