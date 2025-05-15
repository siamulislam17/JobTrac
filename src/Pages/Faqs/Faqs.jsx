import React, { useEffect } from 'react';

const Faq = () => {
    useEffect(() => {
    document.title = "JobTrac | FAQs";
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">What is JobTrac?</h2>
          <p className="text-gray-600">
            JobTrac is an online job portal that connects job seekers with the latest job opportunities and helps companies post and manage job openings efficiently.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">How do I apply for a job?</h2>
          <p className="text-gray-600">
            Visit the job listing page, click the “Details” button on your preferred job, then click “Apply.” You will be redirected to the company’s official application page.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Is JobTrac free to use?</h2>
          <p className="text-gray-600">
            Yes, JobTrac is completely free for job seekers. Companies may need to register to post job listings.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Can I update my profile?</h2>
          <p className="text-gray-600">
            Yes, after logging in, you can visit the “My Profile” page and click the “Update” button to change your display name or profile picture.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Do I need an account to apply?</h2>
          <p className="text-gray-600">
            Yes, you need to be logged in to view detailed job info and apply. You can sign up easily using your email or Google account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
