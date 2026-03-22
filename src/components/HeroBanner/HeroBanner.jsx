import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import bannerImg from '../../assets/hero.png';

const HeroBanner = () => {
    return (
        <div>
            <div className='flex flex-col  justify-center items-center w-11/12 mx-auto pt-10  pb-0'>
                <div className='space-y-5  text-center'>
                    <h2 className='text-6xl font-bold leading-20 max-w-xl mx-auto'>
                        We Build 
                        <span className='text-primary'> Productive </span>
                        Apps
                    </h2>
                    <p className='italic max-w-9/12 mx-auto'>
                        At
                        <span className='text-primary font-bold'> TECH CITY </span>
                         , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
                    </p>
                </div>
                <div className='flex flex-wrap justify-center gap-4 my-5'>
                    <a href="https://play.google.com/store/games" target='_blank' referrerpolicy="no-referrer" className='btn btn-xl  hover:shadow-xl rounded-xl'>
                        <FaGooglePlay/>
                        <span>Google Play</span>
                    </a>
                    <a href="https://www.apple.com/app-store/" target='_blank' referrerpolicy="no-referrer" className='btn btn-xl  hover:shadow-xl rounded-xl'>
                        <IoLogoAppleAppstore/>
                        <span>Apple Store</span>
                    </a>
                </div>
                <img className='pt-5' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;