import { useState } from "react";
import type { FormEvent } from "react";

function SignupForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [skillLevel, setSkillLevel] = useState('')
    const[message, setMessage] = useState('')
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!username.trim()) {
            setMessage('Please enter a username.')
            return
        }

        if (!password.trim()) {
            setMessage('Please enter a password')
            return
        }

        if (!skillLevel.trim()){
            setMessage('Please set a skill level')
            return
        }

        setMessage(`Welcome, ${username.trim()}!, ${password}, ${skillLevel}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Sign up</h2>
            <label htmlFor="signup-username"> Username </label>
            <input
                id="signup-username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter an username"
            /> 

            <label htmlFor="signup-password"> Password </label>
            <input
                id="signup-password"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter a password"
            /> 

            <fieldset>
            <legend>Skill level</legend>

                <label>
                    <input
                    type="radio"
                    name="skillLevel"
                    value="beginner"
                    checked={skillLevel === 'beginner'}
                    onChange={(event) => setSkillLevel(event.target.value)}
                    />
                    Beginner
                </label>

                <label>
                    <input
                    type="radio"
                    name="skillLevel"
                    value="intermediate"
                    checked={skillLevel === 'intermediate'}
                    onChange={(event) => setSkillLevel(event.target.value)}
                    />
                    Intermediate
                </label>

                <label>
                    <input
                    type="radio"
                    name="skillLevel"
                    value="advanced"
                    checked={skillLevel === 'advanced'}
                    onChange={(event) => setSkillLevel(event.target.value)}
                    />
                    Advanced
            </label>
            </fieldset>

            <button type="submit"> Signup</button>
            {message && <p role="status"> {message} </p>}
        </form>

        
    )
}

export default SignupForm