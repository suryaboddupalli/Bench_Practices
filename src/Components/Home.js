import React from 'react';

function Home() {
    return (
        <div>
            <nav>
                <li ><a href='/'>Home</a></li>
                <li ><a href='/login'>Login</a></li>
                <li ><a href='/register'>Register</a></li>
                <li ><a href='/about'>About</a></li>
            </nav>
            <div>
                welcome to HomePage
            </div>
        </div>
    );
}

export default Home;