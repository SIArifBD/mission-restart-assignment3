import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Shared/Loading/Loading';

const Layout = () => {
    const navigation = useNavigation();

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;