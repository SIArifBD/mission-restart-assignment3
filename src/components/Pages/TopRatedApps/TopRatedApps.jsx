import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const TopRatedApps = ({data}) => {
    const topRatedApps = [...data].sort((a,b) => b.ratingAvg - a.ratingAvg).slice(0,8);
    return (
        <section className='py-16'>
            <div>
                <div>
                    <h2 className='text-4xl font-bold text-center flex justify-center gap-3'>Trending Apps</h2>
                    <p className='text-center text-gray-500 mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
                    {
                        topRatedApps.map(app => <Link to={`/appsdetails/${app.id}`} key={app.id} className='card shadow-lg cursor-pointer  bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200   p-4 gap-4'>
                            <figure>
                                <img className='w-full h-52 object-cover rounded-xl' src={app.image} alt="" />
                            </figure>
                            <p>{app.title}</p>
                            <div className='flex justify-between'>
                                <div className='badge badge-soft badge-success '>
                                    <FaDownload />
                                    <p>{app.downloads}</p>
                                </div>
                                <div className='badge badge-soft badge-primary'>
                                    <FaStar />
                                    <p>{app.ratingAvg}</p>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/apps'><button className='btn btn-primary'>Show All</button></Link>
                </div>
            </div>
        </section>
    );
};

export default TopRatedApps;