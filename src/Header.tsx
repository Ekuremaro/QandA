import React from 'react';
import { UserIcon } from './Icons';

const Header = () => {
  return (
    <div>
      {' '}
      <a href="./">Q & A</a>
      <input type="text" placeholder="Search..." />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};

export default Header;
