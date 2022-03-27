const mongoose = require('mongoose')

const Movie = new mongoose.Schema(
	{
		show_id: { type: String, required: true},
        movie_id: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
		seats: [{ seat_id : { type:String,required: true} , price : {type: Number}, booked : {type:Boolean}}]
	},
	{ collection: 'show-data' }
)
const model = mongoose.model('ShowData', Movie)

module.exports = model
