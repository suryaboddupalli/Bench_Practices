import React, { useState } from 'react';
import Profile from './Profile';


function Dashboard() {
    const [profile, setProfile] = useState(false)

    const handleChange = () => {
        setProfile(true)
    }
    return (
        <div>
            <div className='row' >
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary  mt-5 p-2 fs-5' onClick={handleChange} >Personal Details</button>
                        {profile ? <Profile /> : null}
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-3 fs-5' >Account Details</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-3 fs-5' >Balance Check</button>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-3 fs-5'>Transfer</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-3 fs-5' >Card Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
