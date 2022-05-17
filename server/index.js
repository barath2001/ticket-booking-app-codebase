const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const User = require('./models/user.model')
const Movie = require('./models/movie.model')
const Show = require('./models/show.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/project')
mongoose.connect('mongodb://localhost:27017/project')

var db = mongoose.connection;

app.get('/api/moviedata', async (req, res) => {
	try {
		await Movie.find({}, function (err, moviedata) {
			if (err) {
				console.log(err)
			}
			else {
				console.log('query successful')
				console.log(moviedata)
				res.json({ movieList: moviedata })
			}
		});

	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
	// console.log("data sent")
	// res.json({status: "ok"})
})

app.get('/api/getseats/:id', async (req, res) => {
	try {
		console.log(req.params.id)
		await Show.findOne({ show_id: req.params.id }, function (err, showDetails) {
			if (err) {
				console.log(error)
			}
			else {
				console.log('query successful')
				console.log(showDetails.seats)
				res.json({ showDetails})
			}
		});

	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
	// console.log("data sent")
	// res.json({status: "ok"})
})

app.put('/api/updateseats/:id', async (req, res) => {
	console.log(req.body)
	try {
		await Show.updateOne(
			{ show_id: req.params.id }, { $set: { seats: req.body.seats } }, function (err, res) {
				if (err) throw err;
				console.log("1 show updated");
			});
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error' })
	}
})

app.get('/api/moviedetails/:id', async (req, res) => {
	try {
		await Movie.find({ id: req.params.id }, function (err, movieDetails) {
			if (err) {
				console.log(error)
			}
			else {
				console.log('query successful')
				console.log(movieDetails)
				res.json({ movieDetails })
			}
		});

	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
	// console.log("data sent")
	// res.json({status: "ok"})
})

app.get('/api/movieshows/:id', async (req, res) => {
	try {
		await Show.find({ movie_id: req.params.id }, function (err, showDetails) {
			if (err) {
				console.log(error)
			}
			else {
				console.log('query successful')
				console.log(showDetails)
				res.json({ showDetails })
			}
		});

	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
	// console.log("data sent")
	// res.json({status: "ok"})
})

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.listen(1337, () => {
	console.log('Server started on 1337')
})

// Show.create({
// 	show_id: "s1",
// 	movie_id: "1",
// 	date: "25-03-2022",
// 	time: "9:30 AM",
// 	seats: [
// 	{ seat_id: "1", price: 100, booked: true }, 
// 	{ seat_id: "2", price: 200, booked: false }, 
// 	{ seat_id: "3", price: 100, booked: true }, 
// 	{ seat_id: "4", price: 200, booked: false }
// ]
// })