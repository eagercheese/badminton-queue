import { useState } from "react";
import type { FormEvent } from "react";

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

            if (!username.trim()) {
            setMessage('Please enter a username.')
            return
        }

        if (!password.trim()) {
            setMessage('Please enter a password')
            return
        }

        setMessage(`Welcome, ${username.trim()}, ${password}!`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2> Login</h2>
            <label htmlFor="login-username"> Username</label>
            <input
                id="login-username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter your username"
            />

            
            <label htmlFor="login-password"> Password</label>
            <input
                id="login-password"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
            />

            <button type="submit"> Login </button>
            {message && <p role="status"> {message} </p>}
        </form>
    )

}

export default LoginForm