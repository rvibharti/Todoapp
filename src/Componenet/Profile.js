import React, { useState } from 'react';

function Profile() {
    HandelSubmit = (e) => {
        e.preventDefault()
    }


    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [state, setState] = useState(false)

    function HandelSubmit(e) {
        e.preventDefault()
        const { username, password } = state
        //logic
        if (username === "A" && password === "B") {
            setState(true)
        }
    }

    return (
        <>
            <form onSubmit={HandelSubmit}>
                Userame:<input type="text" value={username} onChange={e => {
                    setUsername(e.target.value)
                }}></input>
                Password:<input type="password" value={password} onChange={e => {
                    setPassword(e.target.value)
                }}></input>
                <button type='submit'>submit</button>
            </form>
        </>
    );
}

export default Profile;
