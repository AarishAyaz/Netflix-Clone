import React from 'react';

const About = () => {
  return (
    <div className=" bg-black text-gray-300 p-10 w-screen ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-xl mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 bg-gray-800/60 border border-gray-600 rounded text-white w-full sm:w-180 focus:outline-none focus:border-gray-400"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded font-medium hover:bg-red-700 w-50  transition-colors flex items-center justify-center">
              Get Started
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center underline mb-12">
          <a href="#" className="hover:underline flex justify-items-start">
            Questions? Contact us.
          </a>
        </div>

        <div className="grid grid-cols-2 underline sm:grid-cols-4 gap-4 mb-8">
          <div className="space-y-4">
            <a href="#" className="block hover:underline">FAQ</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Speed Test</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="block hover:underline">Account</a>
            <a href="#" className="block hover:underline">Ways to Watch</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
            <a href="#" className="block hover:underline">Only on Netflix</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="block hover:underline">Media Center</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>

        <div className="mb-4">
          <button className="px-4 py-1 border border-gray-600 rounded mt-5 bg-transparent hover:bg-gray-800/60 transition-colors inline-flex items-center">
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
              />
            </svg>
            English
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
        </div>

        <div className="text-sm mt-8">
          Netflix Pakistan
        </div>
      </div>
    </div>
  );
};

export default About;