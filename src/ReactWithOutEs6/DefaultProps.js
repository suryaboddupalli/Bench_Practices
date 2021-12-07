import React, { Component } from 'react';

class StudentDetails extends Component {
    render() {
        return (
            <div >
                <Student name="surya" age="23"></Student>
                <Student name="Naveen" age="22" ></Student>

            </div>
        );
    }
}

class Student extends Component {
    render() {
        return (
            <div>
                <p> Name: {this.props.name} </p>
                <p>Age : {this.props.age} </p>
            </div>
        )
    }
}

Student.defaultProps = {
    name: "Revanth",
    age: "21"
}

// Without Es6

var createReactClass = require('create-react-class');
var TeacherDetails = createReactClass({
    render: function () {
        return (
            <Teacher name="Syam" age="32"></Teacher>
        )
    },


});

var Teacher = createReactClass({
    getDefaultProps: function () {
        return ({
            name: "Syam", age: "32"
        })
    },
    render: function () {
        return (
            <div>
                <p> Name: {this.props.name} </p>
                <p>Age : {this.props.age} </p>
            </div>
        )
    }
});





export default { Student, TeacherDetails };
