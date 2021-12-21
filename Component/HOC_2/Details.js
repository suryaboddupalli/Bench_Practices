import React, { Component } from 'react';

function Details(WrapperComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }

        render() {
            return (
                <WrapperComponent data={this.state.data} {...this.props} />
            );
        }
    }
}
export default Details