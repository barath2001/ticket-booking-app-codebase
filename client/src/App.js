import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/movieList" exact component={MovieList} />
				<Route path="/movieDetails/:id" exact component={MovieDetails} />
			</BrowserRouter>
		</div>
	)
}

export default App
