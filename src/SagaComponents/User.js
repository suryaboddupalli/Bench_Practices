import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from '../redux/action/userActions.js';

function userDetails({
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
}) {
  
  return (
    <div>
      <button onClick={() => addUser()}>
        Add User
      </button>
      <button onClick={() => getUsers()}>
        Get Users
      </button>
      <button onClick={() => getUser()}>
        Get User
      </button>
      <button onClick={() =>updateUser()}>
        Update User
      </button>
      <button onClick={() => deleteUser(1)}>
        Delete User
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUsers,
      getUser,
      addUser,
      updateUser,
      deleteUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(userDetails);
