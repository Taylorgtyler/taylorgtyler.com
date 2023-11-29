import React from "react";
import Link from 'next/link';


interface PageItem {
  title: string;
  path: string;
}

const pages: PageItem[] = [
    {
        title: 'home',
        path: '/',
    },
    {
        title: 'work',
        path: '/work',
    },
    {
      title: 'about',
      path: '/about',
    },
    {
        title: 'blog',
        path:'/blog',
    }

]



const NavBar = () => {
    return (
        <nav className="sticky top-0 bg-gray-900 p-4 z-50">
          <div className="flex justify-center">
        <ul className="flex space-x-4 mt-8">
          {pages.map((item, index) => (
            <li key={index} className="list-none">
              <Link href={item.path} className="text-white hover:text-gray-300  hover:underline transition duration-300 ease-in-out">
                  {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;