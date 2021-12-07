import React from "react"

class Hello extends React.Component {
    render() {
      return <div color="blue">Hello this is react with JSx</div>;
    }
}

class Hi extends React.Component {
    render() {
      return React.createElement('div', {style:{color:"blue"}}, `HI this is React without JSX`);
    }
}

export default {Hello,Hi}