import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserListRow = ({ user, deleteUser, users, handleChange, handleClick }) => {
  return (
    <tr>
      <td>
        {users.map(user => (
          <div key={user.id}>
            <input
              type="checkbox"
              id={user.id}
              checked={user.value}
              onChange={this.handleChange}
            />
            //<label htmlFor={user.id}>{user.label}</label>
          </div>
        ))}
        <button onClick={this.handleClick}>del</button>
      </td>
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
