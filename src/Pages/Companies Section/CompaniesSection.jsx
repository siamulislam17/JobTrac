import React from 'react';
import { Link } from 'react-router';

const CompaniesSection = ({ data }) => {
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {data.map((company) => (
        <Link 
          to={`/company/${company.id}`}
          key={company.id}
          className="flex flex-col items-center bg-white shadow-md  hover:shadow-2xl rounded-xl p-6  transition hover:scale-105"
          
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-16 h-16 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold text-center">{company.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CompaniesSection;
