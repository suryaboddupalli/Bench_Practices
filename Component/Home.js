import React from 'react';

function Home() {
    return (
        <div>
            <nav>
                    <ul className='nav'>
                        <li ><a href='/'><span>Home</span></a></li>
                        <li ><a href='/login'>Login</a></li>
                        <li ><a href='/register'>Register</a></li>
                    </ul>
                </nav><br /><br />
            <div >
                welcome to HomePage 
                <p>Please Login or SignUp </p>
            </div>
        </div>
    );
}

export default Home;