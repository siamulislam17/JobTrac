import React, { useEffect, useRef, useState } from 'react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const CompanyDetails = () => {

  useEffect(() => {
          document.title = "JobTrac | Company Details";
        }, []);
  const companyData = useLoaderData();
  const { id } = useParams();
  const company = companyData.find((comp) => comp.id === id);
  const jobsRef = useRef(null);

  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (jobsRef.current) {
      const cards = gsap.utils.toArray(".job-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: jobsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  if (!company) {
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">
        Company not found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Company Info */}
      <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-8">
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <FaMapMarkerAlt /> {company.location}
        </p>
        <p className="text-slate-600 font-semibold mt-2">{company.industry}</p>
        <p className="inline-flex items-center mt-4 text-indigo-500 hover:text-indigo-700 gap-2">
          <FaGlobe />{" "}
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            {company.website}
          </a>
        </p>
      </div>

      {/* Jobs List */}
      <div className="mt-20" ref={jobsRef}>
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Available Jobs
        </h2>
        <div className="space-y-6">
          {company.jobs.map((job) => (
            <div
              key={job.id}
              className="job-card border border-gray-200 rounded-lg p-6 shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Type:</span> {job.jobType}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Salary:</span> {job.salary}
              </p>

              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 btn btn-sm btn-primary"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <dialog id="job_modal" className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-xl mb-2">{selectedJob.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Location:</span>{" "}
              {selectedJob.location}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Salary:</span>{" "}
              {selectedJob.salary}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Type:</span>{" "}
              {selectedJob.jobType}
            </p>
            <img
              src={selectedJob.bannerImage}
              alt={selectedJob.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{selectedJob.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {selectedJob.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <div className="modal-action">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Apply
              </a>
              <button
                className="btn"
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CompanyDetails;
