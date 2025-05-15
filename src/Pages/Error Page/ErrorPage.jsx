import React from 'react';
import ErrorImg from '../../assets/undraw_page-not-found_6wni.svg'
import { Link } from 'react-router';
import { AiOutlineHome } from 'react-icons/ai';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen '>
            <img src={ErrorImg} className='w-1/4  mx-auto' />
            <Link to={'/'} 
            className="btn px-8 py-5 mt-8 text-white text-md font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500
             hover:from-blue-500 hover:to-emerald-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl" >
                <AiOutlineHome className="text-xl" />Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;