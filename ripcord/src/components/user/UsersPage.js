import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import toastr from 'toastr';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      //checkedItems: new Map(),
      checkboxes: [
        {id: 'cory-house', isChecked: false},
        {id: 'scott-allen', isChecked: false},
        {id: 'dan-wahlin', isChecked: false}
      ]
    }
  }

  handleChange = (event, id) => {
    // const val = event.target.checked;
    // console.log(val)
    // console.log(id)
    // this.setState({
    //   checkboxes.forEach(box => {
    //     if (id === box.id)
    //     box.isChecked = event.target.checked
    //     console.log(box.isChecked)
    //   })
      //checkboxes: this.state.checkboxes.map(el => (el.id === id ? {...el, val} : el)) 
      //checkboxes: prevState.checkboxes.set(checkboxes[id], event.target.checked) 
    // });
  

    // 
    // 
    //   console.log(id)
    //   console.log(box.id)
    // 
    // this.setState({checkboxes: checkboxes})
    
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
      if (id === box.id) {
        box.isChecked =  event.target.checked
      }
      console.log(box.isChecked)
    })
    this.setState({checkboxes: checkboxes})
  };

    //  updated all of them
    // let checkboxes = this.state.checkboxes
    // checkboxes.forEach(box => {
    //   box.isChecked =  event.target.checked
    //   console.log(box.isChecked)
    // })
    // this.setState({checkboxes: checkboxes})
  

  redirectToAddUserPage = () => {
    this.props.history.push('/user');
  };

  deleteUser = (event, id) => {
    event.preventDefault();
    this.props.actions
      .deleteUser(id)
      .then(() => toastr.success('User deleted!'))
      .catch(error => toastr.error(error));
  };

  deleteAll = event => {
    let checkboxes = this.state.checkboxes
    checkboxes.forEach(box => {
       if (box.isChecked == true)
        this.props.actions
          .deleteUser(box.id)
          .then(() => toastr.success('User deleted!'))
          .catch(error => toastr.error(error));
    })

  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <input
          className="btn btn-primary"t
          type="submit"
          value="Add User"
          onClick={this.redirectToAddUserPage}
        />
        <input
          className="btn btn-primary"
          type="delete"
          value="Delete Selected"
          onClick={this.deleteAll}
        />
        <UserList users={users} deleteUser={this.deleteUser} handleChange={this.handleChange} />
      </div>
    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
