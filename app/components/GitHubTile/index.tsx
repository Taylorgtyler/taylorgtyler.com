import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

interface GitHubLinkProps {
  profileUrl: string;
  username: string;
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ profileUrl, username }) => {
  return (
    <div className="group bg-neutral-800 bg-opacity-75 rounded-l flex items-center justify-between p-6 w-full max-w-xs">
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 w-full text-white"
      >
      <Image src="/github-mark-white.svg" alt="LinkedIn" width={24} height={24} />
        <span className="font-medium">@{username}</span>
      </a>
      <ArrowUpRightIcon className="h-7 w-7 text-white group-hover:text-gray-300 transition-colors duration-200" />
    </div>
  );
};

export default GitHubLink;
