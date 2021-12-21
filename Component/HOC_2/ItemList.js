import React, { Component } from 'react';
import Table from './Table';

class ItemsList extends Component {

    tabRow() {
        if (this.props.data instanceof Array) {
            return this.props.data.map((itemdata) => {
                return <Table obj={itemdata} />;
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
export default ItemsList;