import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';



const HomePage = () => {
    useEffect(() => {
            document.title = "JobTrac | Home";
          }, []);
    return (
        <div>
            <nav className='sticky top-0 z-50 '>
                <NavBar></NavBar>
            </nav>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default HomePage;