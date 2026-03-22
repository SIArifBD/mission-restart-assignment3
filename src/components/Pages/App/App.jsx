import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const App = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app;
    return (
        <Link to={`/appsdetails/${id}`}>
            <div className='card shadow-lg cursor-pointer  bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200   p-4 gap-4'>
                <figure>
                    <img className='w-full h-52 object-cover rounded-xl' src={image} alt="" />
                </figure>
                <p>{title}</p>
                <div className='flex justify-between'>
                    <div className='badge badge-soft badge-success '>
                        <FaDownload />
                        <p>{downloads}</p>
                    </div>
                    <div className='badge badge-soft badge-secondary'>
                        <FaStar />
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;