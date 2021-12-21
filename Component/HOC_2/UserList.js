import React, { Component } from 'react';
import Table from './Table';

class UserList extends Component {

    tabRow() {
        if (this.props.data instanceof Array) {
            return this.props.data.map((userdata) => {
                return <Table obj={userdata} />
            })
        }
    }
    render() {
        return (
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
        );
    }
}
export default UserList;