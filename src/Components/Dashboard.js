import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
    
function Dashboard() {
    const history = useHistory();
    return (
        <div> 
            <button onClick={()=>history.push("Home")}>logOut</button>
            Welcome to DashBoard
        </div>
    );
}

export default Dashboard;