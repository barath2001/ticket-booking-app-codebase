const mongoose = require('mongoose')

const Movie = new mongoose.Schema(
	{
		id: { type: String, required: true},
        name: { type: String, required: true },
        genre: { type: String, required: true },
        image: { type: String, required: true },
		bgimage: {type: String, required: true},
		description: {type: String, required: true},
		censor: {type: String, required: true},
		director: {type: String, required: true},
		cast: {type: String, required: true}
	},
	{ collection: 'movie-data' }
)

const model = mongoose.model('MovieData', Movie)

module.exports = model
