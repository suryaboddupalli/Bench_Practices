import React from "react" 

class StudentModel extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Students Details</h2>
                <p>
                    <label>Student Id</label>
                    <input type= "text" value={this.props.Id} />
                </p>
                <p>
                    <label>Student Name</label>
                    <input type= "text" value={this.props.Name} />
                </p>
                <p>
                    <label>Student Dept</label>
                    <input type= "text" value={this.props.Dept}/>
                </p>
                <input type="submit" >save</input>
            </div>
        )
    }
}     

export default StudentModel
