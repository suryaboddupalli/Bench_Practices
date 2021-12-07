import React from 'react' 

class Greet extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>hello, This is Es6 React class</div>
        )
    }
}

var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello,this is React class</h1>;
  }
});

export default {Greet,Greeting}