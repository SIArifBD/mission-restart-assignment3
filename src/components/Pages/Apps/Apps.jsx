import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { CiSearch } from "react-icons/ci";
import App from '../App/App';

const Apps = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <main className='min-h-screen'>
            <div className='py-16'>
                <h2 className='text-4xl font-bold text-center flex justify-center gap-3'>Our All Applications</h2>
                <p className='text-center text-gray-400 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-5 items-start justify-between lg:items-end mt-10 sticky'>
                <h2 className='text-lg  underline  font-bold'>({data.length}) Apps Found</h2>
                <label className="input max-w-[300px] w-[300px] input-primary ">
                    <CiSearch />
                    <input type="search" className="grow" placeholder="Search Apps" />
                </label>
            </div>
            <Suspense fallback={<span>Loading......</span>}>
                <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-10 gap-5'>
                    {
                        data.map(app => <App key={app.id} app={app}></App>)
                    }
                </div>
            </Suspense>
        </main>
    );
};

export default Apps;