import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {' | '}
      <NavLink to="/users" activeClassName="active">Users</NavLink>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

export default Header;
