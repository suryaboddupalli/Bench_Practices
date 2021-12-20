import React from 'react'
import {Link, useRouteMatch} from "react-router-dom"

function Dashboard() {
    const match = useRouteMatch()
    return (
        <div>
            <nav>
              <button onClick={()=>{sessionStorage.clear()}}>Log Out</button>
            </nav>
            welcome to DashBoard
           <ul>
               <li>
                   <Link to={`${match.url}/first`}>First</Link>
               </li>
               <li>
               <Link to={`${match.url}/second`}>second</Link>
               </li>
           </ul>
        </div>
    )
}

export default Dashboard