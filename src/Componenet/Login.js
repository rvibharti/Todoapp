import React, { Component } from 'react';
import { Navigate } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false;
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        //logic
        if (username === "Ravi" && password === "123") {
            localStorage.setItem('token', 'anyrandomstring')
            this.setState({
                loggedIn: true
            })
        } else { alert('plz enter valid username or password') }
    }

    render() {
        if (this.state.loggedIn) {
            return <Navigate to="/TodoList" />
        }

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h1>logIn</h1>
                <form onSubmit={this.submitForm}>
                    UserId: <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} />
                    <br />
                    Password: <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type='submit' />
                </form>
                <br /><br /><br />
                username: Ravi<br />
                pwd: 123
            </div>
        );
    }
}
export default Login;