import react from 'react'
import { useState } from 'react'
import styled from "styled-components";
import "./auth.css"

const Login = () => {
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
			window.location.href = '/movieList'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className="auth--container" id="auth--container">
			<div className="auth--form-container auth--log-in-container">
				<form onSubmit={loginUser}>
					<h1 id='login-heading'>Login</h1>
					<input id='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
					/>
					<input id='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<a href="#">Forgot your password?</a>
					<button id='login-button' type="submit">Log In</button>
				</form>
			</div>
			<div className="auth--overlay-container">
				<div className="auth--overlay">
					<div className="auth--overlay-panel auth--overlay-right">
						<h1>Theatre Ticket Booking</h1>
						<p>Log In to book movie tickets from anywhere and at anytime!</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
