import React from 'react';
import HeroImg from '../../assets/undraw_job-hunt_5umi.svg';

const HeroSection = () => {
    return (
        <div>
            <section className=" bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    
                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold   text-white mb-6">
                        Track Your Future, <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">One Job at a Time</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">JobTrack</span> is your all-in-one platform for discovering the latest job 
                        opportunities from top companies. Browse roles, compare requirements,
                        and apply directly — all in one place. Whether you're a fresh graduate
                        or an experienced professional, JobTrack helps you move forward in your career.
                    </p>
                    
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2">
                    <img
                        src={HeroImg}
                        alt="Job search illustration"
                        className="w-full max-w-md mx-auto"
                    />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HeroSection;