import Details from './Details'

function Users({ value }) {

    return (
        <div>
            <div>Number user = {value.length}</div>
        </div>
    )
}

export default Details(Users)