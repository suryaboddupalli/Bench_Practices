import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
        </tr>
    );
  }
}

export default Table;