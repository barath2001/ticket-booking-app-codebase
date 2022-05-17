import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
//import Dashboard from './components/Dashboard'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import MovieShows from './components/MovieShows'
import Navbar from './components/Navbar'
//import MovieCard from './components/MovieCard'
import SeatBooking from "./components/SeatBooking"
import Admin from "./components/Admin"

const App = () => {
	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Login/>} />
					<Route path="/register" exact element={<Register/>} />
					<Route path="/admin" exact element={<Admin/>} />
					{/*<Route path="/dashboard" exact component={Dashboard} /> */}
					<Route path="/movieList" exact element={<MovieList/>} />
					<Route path="/movieDetails/:id" element={<MovieDetails/>} />
					{/*<Route path="/movieCard" element={<MovieCard/>} />*/}
					<Route path="/movieShows/:id" element={<MovieShows/>} />
					<Route path="/seatbooking/:showid" element = {<SeatBooking/>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
