import React from "react"
import StudentModel from "./StudentModel"
import Model from "./Model"

class Students extends React.Component {
    constructor() {
        super()
        this.state = {
            studentsData: [
                { Id: "1", Name: "surya", Dept: "ECE" },
                { Id: "2", Name: "Naveen", Dept: "ECE" },
                { Id: "3", Name: "Revanth", Dept: "ECE" }
            ],
            showModel: false
        }

    }

    render() {
        return (
            <div>
                <h2>Students data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>Action</th>
                            <td><button 
                                onClick={
                                    this.editStudent = () => { 
                                        this.setState({ showModel: !this.state.showModel 
                                        })
                                    }
                                }>Edit
                                </button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentsData.map(std => {
                            <tr key={std.Id}>
                                <td>{std.Id}</td>
                                <td>{std.Name}</td>
                                <td>{std.Dept}</td>
                                <td><button 
                                onClick={
                                    this.editStudent = () => { 
                                        this.setState({ showModel: !this.state.showModel 
                                        })
                                    }
                                }>Edit
                                </button></td>
                                <Model close={this.editStudent} open={this.state.showModel} >
                                    <StudentModel std={std}></StudentModel>
                                </Model>
                            </tr>
                            console.log(std.Id)
                            console.log(std.Name)
                            console.log(std.Dept)

                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Students