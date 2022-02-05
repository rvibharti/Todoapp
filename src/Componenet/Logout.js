import React from 'react';
import { Link } from 'react-router-dom';


function Logout() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }} >
            <h2>Logout sucessfully!!</h2>
            <Link to="/login">Login again</Link>

        </div>
    )
}

export default Logout;
