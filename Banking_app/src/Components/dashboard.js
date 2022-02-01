import React, { useState } from 'react';
import Profile from './Profile';


function Dashboard() {
    const [profile, setProfile] = useState(false)

    const handleChange = () => {
        setProfile(true)
    }
    return (
        <div>
            <div className='row mt-5' >
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary  p-5 fs-5' onClick={handleChange} >Personal Details</button>
                        {profile ? <Profile /> : null}
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-5 fs-5' >Account Details</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-5 fs-5' >Balance Check</button>
                    </div>
                </div>
            </div>
            <div className='row mt-5' >
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-5 fs-5'>Transfer</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card' style={{ "width": "18em " }}>
                        <button className='btn btn-secondary p-5 fs-5' >Card Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
