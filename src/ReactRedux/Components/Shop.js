import React from 'react';
import {connect } from 'react-redux'
import {buyLaptop, fecthUsers} from "../Redux/actions/index"


class Shop extends React.Component {

    render() {
        return (
            <div>
                <h2>Electronic Shop</h2>
                <div>
                    <p>HP laptop</p>
                    <p>Available :{this.props.Laptops} </p>
                    <button onClick={this.props.buyLaptop}>Buy</button><br/>
                    <span>Users</span>
                    <p>{this.props.users}</p>
                    <button>fetch data</button>
                </div>

            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    console.log(state.users)
    console.log(state.noOfLaptops)
    console.log(state)
    return{
       Laptops: state.noOfLaptops,
       users: state.users
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        buyLaptop : ()=>dispatch(buyLaptop()),
        fetchUsers :()=>dispatch(fecthUsers())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)