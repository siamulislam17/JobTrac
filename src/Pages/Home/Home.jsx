import React, { use } from 'react';
import HeroSection from '../Hero Section/HeroSection';
import HowItWorks from '../How It Works/HowItWorks';
import CompaniesSection from '../Companies Section/CompaniesSection';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Auhentication/AuthProvider';
import SuccessStoru from '../SuccessStory/SuccessStoru';
import SiteStatus from '../Site status/SiteStatus';

const Home = () => {
    const data = useLoaderData();
    const { name } = use(AuthContext);
    console.log(name);
    return (
        <div>
            <div className='h-screen mb-5'>
                <HeroSection></HeroSection>
            </div>

            <div className='my-10'>
                <HowItWorks></HowItWorks>
            </div>
            <div className='my-10 md:my-25'>
                <h1 className='text-3xl font-bold text-center mb-5'>Popular Companies</h1>
                <CompaniesSection data={data}></CompaniesSection>
            </div>
            <div>
                <SiteStatus></SiteStatus>
            </div>

            <div>
                <SuccessStoru></SuccessStoru>
            </div>
        </div>
    );
};

export default Home;