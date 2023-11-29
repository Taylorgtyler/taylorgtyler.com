import React from 'react';

function WorkPage() {
  return (
    <div className="min-h-screen bg-gray-900 px-4 md:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12">My Work</h1>
        
        <div className="space-y-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-4xl font-semibold mb-3">Company Name</h2>
            <p className="text-md mb-2 italic">Your Role - Dates</p>
            <p className="text-lg">
              A brief summary of your role and contributions at the company.
            </p>
          </div>

          {/* Repeat for other work experiences */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default WorkPage;

