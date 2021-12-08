import propTypes from "prop-types"

function Greet({Name, num}){
    return(
        <div>
            hello {Name}. Your Number is {num}
        </div>
    )
}
Greet.propTypes ={
    person : propTypes.shape({
        Name : propTypes.string.isRequired, 
        num : propTypes.number.isRequired
    })
    
}

export default Greet