import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/arrow.svg';

const CardLinks = ({ values, page }) => {
    const cardsInfo = [
        {
            title: "WEB DESIGN",
            url: "/WebDesign",
            image: "bg-webDesign bg-bottom",
            height: "xl:h-[640px]",
        },
        {
            title: "APP DESIGN",
            url: "/appDesign",
            image: "bg-appDesign bg-center",
            height: "xl:h-[308px]",
        },
        {
            title: "GRAPHICS DESIGN",
            url: "/graphicDesign",
            image: "bg-graphicDesign bg-bottom",
            height: "xl:h-[308px]",
        }
    ];

    const grid = [`row-span-2 col-span-1 xl:h-[640px]`, `row-span-1 xl:h-[308px]`, `row-span-1 xl:h-[308px]`]

    const filteredCards = cardsInfo.filter(card => values.includes(card.title));

    return (
        filteredCards.map((card, i) => (
            <Link
                to={card.url} key={i}
                className={`flex w-full flex-col gap-3 rounded-[15px] h-[250px] bg-[#E7816B] overflow-hidden md:h-[200px] ${page === "main" ? grid[i] : "xl:h-[308px]"}`}>
                <div className={`flex flex-col gap-3 h-[250px] w-full items-center justify-center bg-no-repeat bg-cover hover:opacity-50 xl:gap-6 duration-300 ${card.image} ${page === "main" ? card.height : "xl:h-[308px]"}`}>
                    <h3 className='font-medium text-[28px] leading-[36px] tracking-[1.4px] md:text-[40px] md:leading-10 md:tracking-[2px]'>{card.title}</h3>
                    <div className="flex gap-4">
                        <p className='font-normal text-[15px] tracking-[5px]'>VIEW PROJECTS</p>
                        <img src={arrowIcon} alt="Arrow icon" />
                    </div>
                </div>
            </Link>
        ))
    );
};

export default CardLinks;
