import React from 'react';
import PropTypes from 'prop-types';
import UserListRow from './UserListRow';

const UserList = ({ users, deleteUser, handleChange }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserListRow
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            handleChange={handleChange}
            
          />
        ))}
      </tbody>
    </table>
  );
};
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
