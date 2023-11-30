import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Work extends Component {
  render() {
    const variants = {
      hidden: { opacity: 0, height: 10 },
      visible: { opacity: 1, height: 'auto' }
    };

    return (
      <div className="min-h-screen bg-gray-900 px-4 md:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-center text-white mb-12">My Work</h1>
          
          <div className="space-y-10 overflow-hidden">
          <motion.div
              initial="hidden"
              whileHover="visible"
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-4xl font-semibold text-gray-900 mb-2">Data Product Manager</h2>
              <p className="text-md italic text-gray-700">Talentcare</p>
              <p className="text-sm italic text-gray-700">2019 - Current</p>
              <motion.div
                variants={variants}
                className="text-lg text-gray-900"
              >
                <p className='mb-4 mt-4'>Grew from data analyst to leading BI, architecting an improved cloud data platform, and developing
                a cross functional team of engineers and analysts.</p>
                <p className='mb-2'>{`Highlights`}</p>
                <ul className="list-disc list-outside ml-6">
                  <li>Designed and implemented a new data analytics platform.</li>
                  <li>Enhanced BI capabilities and scaled data processes.</li>
                  <li>Gathered and distilled stakeholder feedback into impactful features.</li>
                  <li>Established shared responsibility between data producers, engineers, and consumers to improve reliability.</li>
                  <li>Iterated on the data platform and cut AWS storage costs 90% and compute costs 23%.</li>
                  <li>Created decks and presented actionable insights to client C level teams.</li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileHover="visible"
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-4xl font-semibold text-gray-900 mb-2">Founder & Product Lead</h2>
              <p className="text-md italic text-gray-700">Doer.</p>
              <p className="text-sm italic text-gray-700">2022 - Current</p>
              <motion.div
                variants={variants}
                className="text-lg text-gray-900"
              >
                <p className='mb-4 mt-4'>Developing MVP for B2B SaaS task management app that improved task tracking
                and employee efficiency</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileHover="visible"
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-4xl font-semibold text-gray-900 mb-3">Founder & Lead Frontend Engineer</h2>
              <p className="text-md italic text-gray-700 mb">Persona Marketing</p>
              <p className="text-sm italic text-gray-700 mb">2019 - 2020</p>
              <motion.div
                className="text-lg text-gray-900 mt-4"
                variants={variants}
              >
                Founded a data driven marketing agency focused on creating
                engaging web pages and social media content.
                <p className='mb-2 mt-4'>{`Highlights`}</p>
                <ul className="list-disc list-outside ml-6">
                  <li>Gather client requirements, distilled into user stories, and managed development projects.</li>
                  <li>Lead development of impactful Wordpress sites.</li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileHover="visible"
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-4xl font-semibold text-gray-900 mb-3">Content Writer</h2>
              <p className="text-md italic text-gray-700 mb">Gaming Cypher</p>
              <p className="text-sm italic text-gray-700 mb">2017 - 2020</p>
              <motion.div
                className="text-lg text-gray-900 mt-4"
                variants={variants}
              >
                Created content for upcoming video games and development studios.
                <p className='mb-2 mt-4'>{`Highlights`}</p>
                <ul className="list-disc list-outside ml-6">
                  <li>Interviewed Dallas Mavericks esports team and developed content leading up to their 2nd season.</li>
                  <li>Review games in various stages of development from alpha to production releases.</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
