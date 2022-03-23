import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
//import Dashboard from './components/Dashboard'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
//import MovieCard from './components/MovieCard'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/login" exact element={<Login/>} />
					<Route path="/register" exact element={<Register/>} />
					{/*<Route path="/dashboard" exact component={Dashboard} /> */}
					<Route path="/movieList" exact element={<MovieList/>} />
					<Route path="/movieDetails/:id" element={<MovieDetails/>} />
					{/*<Route path="/movieCard" element={<MovieCard/>} />*/}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
