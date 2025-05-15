import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClipboardCheck, FaPaperPlane, FaSearch } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".card");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-16" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          JobTrack makes your job search seamless. Follow these simple steps to land your dream role!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Step 1 */}
        <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <FaSearch className="text-4xl text-primary mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Explore Jobs</h3>
          <p className="text-gray-600">
            Discover job listings from top companies tailored to your skills and interests.
          </p>
        </div>

        {/* Step 2 */}
        <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <FaClipboardCheck className="text-4xl text-primary mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Check Requirements</h3>
          <p className="text-gray-600">
            Review job details, salary, type, and requirements — all in one place.
          </p>
        </div>

        {/* Step 3 */}
        <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <FaPaperPlane className="text-4xl text-primary mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Apply Instantly</h3>
          <p className="text-gray-600">
            Apply directly through the company site and take the next step in your career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
