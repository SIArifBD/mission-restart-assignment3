import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload, FaStar } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";

const AppsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singleApp = data.find(app => app.id === parseInt(id))

    const { image, title, companyName, downloads, description, ratingAvg, reviews, size } = singleApp;
    return (
        <main className='min-h-screen'>
            <div className='w-11/12 mx-auto space-y-5 py-20'>
                <div className='flex lg:flex-row flex-col gap-5 items-stretch'>
                    <div className='flex-1'>
                        <img className='rounded-xl shadow-2xl h-full' src={image} alt="" />
                    </div>
                    <div className='flex-2'>
                        <div className='space-y-3 border-b-2 pb-4 border-primary'>
                            <h2 className='text-3xl font-bold'>{title}</h2>
                            <p>Developed by: <span className='text-primary font-medium'>{companyName}</span></p>
                        </div>
                        <div className='py-5 flex justify-between items-center'>
                            <div className='stats stats-horizontal'>
                                <div className='stat'>
                                    <div className='stat-figure text-primary'>
                                        <FaDownload />
                                    </div>
                                    <p className='stat-title'>Downloads</p>
                                    <h2 className='stat-value'>{downloads}</h2>
                                </div>
                                <div className='stat'>
                                    <div className='stat-figure text-primary'>
                                        <FaStar />
                                    </div>
                                    <p className='stat-title'>Avarage Ratings</p>
                                    <h2 className='stat-value'>{ratingAvg}</h2>
                                </div>
                                <div className='stat'>
                                    <div className='stat-figure text-primary'>
                                        <MdRateReview />
                                    </div>
                                    <p className='stat-title'>Total Reviews</p>
                                    <h2 className='stat-value'>{reviews}</h2>
                                </div>
                            </div>
                        </div>
                        <button className='btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white'>Install Now ({size}MB)</button>
                    </div>
                </div>
                <div className='divider'></div>
                <div>
                    <h2>Ratings</h2>
                </div>
                <div className='divider'></div>
                <div>
                    <h2>Description</h2>
                    <p className='text-justify space-y-3 opacity-60'>{description}</p>
                </div>
            </div>
        </main>
    );
};

export default AppsDetails;