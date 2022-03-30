import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

function App() {
	//const history = useHistory();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			//history.push('/login')
		}
	}

	return (
		<div class="auth--container" id="auth--container">
			<div class="auth--form-container auth--log-in-container">
				<form onSubmit={registerUser}>
					<h1>Register</h1>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Name"
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<button type="submit">Register</button>
				</form>
			</div>
			<div class="auth--overlay-container">
				<div class="auth--overlay">
					<div class="auth--overlay-panel auth--overlay-right">
						<h1>Theatre Ticket Booking</h1>
						<p>Register to book movie tickets from anywhere and at anytime!</p>
					</div>
				</div>
			</div>
		</div>
		// <div>
		// 	<h1>Register</h1>
		// 	<form onSubmit={registerUser}>
		// 		<input
		// 			value={name}
		// 			onChange={(e) => setName(e.target.value)}
		// 			type="text"
		// 			placeholder="Name"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={email}
		// 			onChange={(e) => setEmail(e.target.value)}
		// 			type="email"
		// 			placeholder="Email"
		// 		/>
		// 		<br />
		// 		<input
		// 			value={password}
		// 			onChange={(e) => setPassword(e.target.value)}
		// 			type="password"
		// 			placeholder="Password"
		// 		/>
		// 		<br />
		// 		<input type="submit" value="Register" />
		// 	</form>
		// </div>
	)
}

export default App
