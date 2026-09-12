import { useState } from 'react'
import type { FormEvent } from 'react'

function GuestForm() {
	const [username, setUsername] = useState('')
	const [message, setMessage] = useState('')

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (!username.trim()) {
			setMessage('Please enter a username.')
			return
		}

		setMessage(`Welcome, ${username.trim()}!`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Continue as guest</h2>

			<label htmlFor="guest-username">Username</label>
			<input
				id="guest-username"
				type="text"
				value={username}
				onChange={(event) => setUsername(event.target.value)}
				placeholder="Enter a username"
			/>

			<button type="submit">Continue</button>

			{message && <p role="status">{message}</p>}
		</form>
	)
}

export default GuestForm
