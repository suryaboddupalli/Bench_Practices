import React from 'react';
import { connect } from 'react-redux';

function Profile({ user }) {
    return (
        <div>
            <label>Name :&nbsp;&nbsp;&nbsp;<span>{user.Name}</span></label><br />
            <label>Date of Birth:&nbsp;&nbsp;&nbsp;<span>{user.dateOfBirth}</span></label><br />
            <lable>Address:&nbsp;&nbsp;&nbsp;<span>{user.Address}</span></lable><br />
            <lable>Account Number:&nbsp;&nbsp;&nbsp;<span>{user.AccountNumber}</span></lable><br />
            <lable>Account Type:&nbsp;&nbsp;&nbsp;<span>{user.AccountType}</span></lable><br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(Profile)
