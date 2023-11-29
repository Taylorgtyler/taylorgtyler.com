import React from 'react';

export default function WorkPage() {
  return (
    <div className='bg-gray-900 min-h-screen'>
    <section className="bg-gray-900 text-gray-300 p-8 h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">My Work</h1>
        <p className="mb-6">
          Passionately building products that developers love, while teaching and inspiring the next generation of creators. Below is an overview of my professional journey.
        </p>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Vercel</h2>
            <p className="mb-2 font-light">
              Early member at Vercel, contributing to the rise of Next.js and fostering a vibrant developer community.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Hy-Vee</h2>
            <p className="mb-2 font-light">
              Spearheaded the digital transformation at Hy-Vee, integrating modern web technologies to enhance user experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Workiva</h2>
            <p className="font-light">
              At Workiva, I embraced cutting-edge cloud solutions, contributing significantly to data reporting and compliance tools.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
