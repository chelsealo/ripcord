import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserListRow = ({ user, deleteUser, handleChange }) => {
  return (
    <tr>
    <input type={'checkbox'} id={user.id} onChange={event => handleChange(event, user.id)}/>
      <td>
	      <a href="#" onClick={event => deleteUser(event, user.id)}>Delete</a>
      </td>
      <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
      <td>{user.firstName} {user.lastName}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserListRow;
