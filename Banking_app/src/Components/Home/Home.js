import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'

function Home() {
    return (
        <div className='page' >
            <Navbar />
            <div id='text' className='text-center fs-1 mt-5'>
                WELCOME TO BANKING
            </div>
        </div>
    )
}

export default Home;
