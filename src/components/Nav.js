import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const { pathname } = useLocation();

  return (
    <header className="bg-white px-[6.25rem] h-[5.938rem] flex items-center">
      <nav>
        <div className="flex items-center gap-10">
          <h1 className="text-3xl text-[#0290ff] font-bold">
            Bookstore With Redux Toolkit
          </h1>
          <ul className="flex items-center gap-10">
            {links.map(({ id, path, text }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={`${
                    path === pathname ? 'text-gray-500' : 'text-gray-400'
                  } uppercase`}
                  exact
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <span className="ml-auto p-2 border border-gray-200 rounded-full cursor-pointer">
        <FaUserAlt className="text-[#0290ff]" />
      </span>
    </header>
  );
};

export default Nav;
