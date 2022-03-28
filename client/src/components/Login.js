import { useState } from 'react'
import styled from "styled-components";
import "./auth.css"

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div class="auth--container" id="auth--container">
			<div class="auth--form-container auth--log-in-container">
				<form onSubmit={loginUser}>
					<h1>Login</h1>
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
					<a href="#">Forgot your password?</a>
					<button type="submit">Log In</button>
				</form>
			</div>
			<div class="auth--overlay-container">
				<div class="auth--overlay">
					<div class="auth--overlay-panel auth--overlay-right">
						<h1>HTML CSS Login Form</h1>
						<p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
					</div>
				</div>
			</div>
		</div>
		// <div>
		// 	<h1>Login</h1>
		// 	<form onSubmit={loginUser}>
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
		// 		<input type="submit" value="Log In" />
		// 	</form>
		// </div>
	)
}

export default App
