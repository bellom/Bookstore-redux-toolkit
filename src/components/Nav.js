import React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <header>
      <nav>
        <div className="nav">
          <h1>Bookstore With Redux Toolkit</h1>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.path} className="nv-lk" exact>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
