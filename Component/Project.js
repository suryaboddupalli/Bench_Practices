import React from 'react' 
import {Link,useParams} from 'react-router-dom'

function Project(){
    const {id} = useParams();
    return(
        <div>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to={`/dashboard/${id}`} >{id}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Project