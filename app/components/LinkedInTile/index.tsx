import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

interface LinkedInLinkProps {
  profileUrl: string;
  name: string;
}

const LinkedInLink: React.FC<LinkedInLinkProps> = ({ profileUrl, name }) => {
  return (
    <div className="group bg-neutral-800 bg-opacity-75 rounded-l flex items-center justify-between p-6 w-full max-w-xs">
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 w-full text-white"
      >
        <Image src="/Linkedin_icon.svg" alt="LinkedIn" width={24} height={24} />
        <span className="font-medium">{name}</span>
      </a>
      <ArrowUpRightIcon className="h-7 w-7 text-white group-hover:text-gray-300 transition-colors duration-200" />
    </div>
  );
};

export default LinkedInLink;


  
  