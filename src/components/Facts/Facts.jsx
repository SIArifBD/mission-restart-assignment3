import React from 'react';

const Facts = () => {
    return (
        <section className=' bg-gradient-to-tl to-[#632EE3] from-[#9F62F2]'>
            <div className='pt-10 flex flex-col justify-center items-center'>
                <h2 className='text-white font-bold text-4xl text-center'>Trusted by Millions, Built for You</h2>
                <div className='stats stats-vertical lg:stats-horizontal  text-white py-10'>
                    <div className='stat space-y-3'>
                        <div className='stat-figure'>
                            <h2>Total Downloads</h2>
                            <h1 className='stat-value  text-5xl py-5'>29.6M</h1>
                            <p className='stat-desc text-white'>21% more than last month</p>
                        </div>
                    </div>
                    <div className='stat space-y-3'>
                        <div className='stat-figure'>
                            <h2>Total Reviews</h2>
                            <h1 className='stat-value  text-5xl py-5'>906K</h1>
                            <p className='stat-desc text-white'>46% more than last month</p>
                        </div>
                    </div>
                    <div className='stat space-y-3'>
                        <div className='stat-figure'>
                            <h2>Active Apps</h2>
                            <h1 className='stat-value  text-5xl py-5'>132+</h1>
                            <p className='stat-desc text-white'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facts;