import React from 'react';
import { CountUp } from 'use-count-up';

const SiteStatus = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">JobTrac Site Stats</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It’s a pretty awesome stats area!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto py-8">
        <div>
          <p className="text-3xl font-semibold text-gray-800">
            <CountUp isCounting end={14} duration={10} />
          </p>
          <p className="text-gray-600">Jobs Posted</p>
        </div>

        <div className="border-l border-r"> 
          <p className="text-3xl font-semibold text-gray-800">
            <CountUp isCounting end={0} duration={2} />
          </p>
          <p className="text-gray-600">Jobs Filled</p> 
        </div>


        <div>
          <p className="text-3xl font-semibold text-gray-800">
            <CountUp isCounting end={14} duration={10} />
          </p>

          
          <p className="text-gray-600">Companies</p>
        </div>

        <div className="border-l">
          <p className="text-3xl font-semibold text-gray-800">
            <CountUp isCounting end={2369} duration={10} separator="," />
          </p>
          <p className="text-gray-600">Members</p>
        </div>
      </div>
    </div>
  );
};

export default SiteStatus;
