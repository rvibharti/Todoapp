import React from 'react';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h2>Welcome to ToDo-App</h2>
            <Link to='/login'>Please log-in first</Link>
        </div>
    )
}

export default Home;
