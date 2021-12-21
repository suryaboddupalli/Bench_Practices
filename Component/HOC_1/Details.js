import axios from 'axios'
import React from 'react'

const Details = (WrappedComponent)=>{
    return class extends React.Component{
        constructor(){
            super()
            this.state ={
                userData :[]
            }
        }
        componentDidMount(){
            axios.get('http://localhost:8000/user/')
            .then(res=>{
                this.setState({userData : res.data})
            })
        }
        render(){
            return(
                <WrappedComponent value={this.state.userData} />
            )
        }

    }
}

export default Details