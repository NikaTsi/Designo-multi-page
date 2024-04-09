import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const Location = () => {
    return (
        <div className='flex flex-col w-full gap-12 items-center py-[120px] xl:flex-row xl:gap-0 xl:justify-between xl:w-[1111px] xl:py-[160px]'>
            {data.aboutUs.cards.map((item, i) => (
                <div className='flex flex-col w-full items-center' key={i}>
                    <img src={require(`../assets${item.image}`)} alt={item.heading} />
                    <h2 className='text-[20px] font-medium leading-[26px] text-[#333136] tracking-[5px] mt-12 mb-8'>{item.heading}</h2>
                    <Link to={"/location"} key={i}>
                        <button className="font-medium text-[15px] tracking-[1px] text-[#FFF] w-[152px] h-14 bg-[#E7816B] rounded-[8px] cursor-pointer hover:bg-[#FFAD9B] hover:text-[#FFF] duration-300">SEE LOCATION</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Location;
