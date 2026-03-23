import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredInstalledApps, removeFromStoreDB } from '../../../utility/addToLocalDB';
import { FaDownload, FaStar } from "react-icons/fa6";

const InstalledApps = () => {
    const data = useLoaderData();
    // console.log(data)
    const [installAppList, setInstallAppList] = useState([]);
    const [sorting, setSorting] = useState("");

    useEffect(() => {
        const storedInstallAppData = getStoredInstalledApps();
        const convertedStoredInstallApps = storedInstallAppData.map(i => parseInt(i));
        const myInstallAppList = data.filter(app => convertedStoredInstallApps.includes(app.id));
        setInstallAppList(myInstallAppList);
    }, [data])

    const handleSorting = (type) => {
        setSorting(type);
        if (type === "lh") {
            const sortedByLowToHigh = [...installAppList].sort((a, b) => a.size - b.size);;
            setInstallAppList(sortedByLowToHigh);
        }
        else if (type === "hl") {
            const sortedByHighToLow = [...installAppList].sort((a, b) => b.size - a.size);
            setInstallAppList(sortedByHighToLow);
        }
    };

    const handleUninstall = (id) => {
        removeFromStoreDB(id);
        const remainingApps = installAppList.filter(app => app.id !== parseInt(id));
        setInstallAppList(remainingApps);
    }
    return (
        <main className='min-h-screen'>
            <div className='px-5 lg:w-11/12 mx-auto py-10'>
                <div className='py-16'>
                    <h2 className='text-4xl font-bold text-center flex justify-center gap-3'>Your Installed Apps</h2>
                    <p className='text-center text-gray-400 mt-5'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className=' flex justify-between mt-10 sticky'>
                    <h2 className='text-lg  underline font-medium'>({installAppList.length}) Apps Found</h2>
                    <div className="">
                        <select onChange={(e) => handleSorting(e.target.value)} className="select bg-white">
                            <option value="" disabled>Sort By Size</option>
                            <option value="lh">Low-High</option>
                            <option value="hl">High-Low</option>
                        </select>
                    </div>
                </div>
                <div className='divider'></div>
                <div className=' grid grid-cols-1 gap-5'>
                    {
                        installAppList.map(installApp => <div key={installApp.id} className='flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200'>
                            <div className='w-14 h-14 shrink-0'>
                                <img className='w-full h-full object-cover rounded-xl' src={installApp.image} alt="" />
                            </div>
                            <div className='flex-1'>
                                <div className=''>
                                    <p className='font-medium text-sm line-clamp-1'>{installApp.title}</p>
                                </div>
                                <div className='flex items-center gap-3 text-xs mt-1'>
                                    <span className='flex items-center gap-1 text-success'><FaDownload /> {installApp.download}</span>
                                    <span className='flex items-center gap-1 text-secondary'><FaStar /> {installApp.ratingAvg}</span>
                                    <span className='text-xs text-gray-500'>{installApp.size} MB</span>
                                </div>
                            </div>
                            <button onClick={() => handleUninstall(installApp.id)} className='btn btn-success text-white'>Uninstall</button>
                        </div>)
                    }
                </div>
            </div>
        </main>
    );
};

export default InstalledApps;