import React, { Component } from "react";

type counterProps = {
  message: string;
};

type counter = {
  count: number;
};

export class ClassComponents extends Component<counterProps, counter> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((value) => ({ count: value.count + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Count</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassComponents;
