import React from 'react';
import ErrorImg from '../../../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-center p-5'>
            <img src={ErrorImg} alt="" />
        </div>
    );
};

export default ErrorPage;