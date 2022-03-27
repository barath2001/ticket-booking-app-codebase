import "./MovieCard.css"
//import starIcon from "../../public/star-icon.png"

function MovieCard(props) {
	console.log(props)
	return (
		//<li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.name}</li>
		<div className="card" onClick={() => { window.location.href = '/movieDetails/' + props.movieInfo.id }}>
			<img className="card--image" src={props.movieInfo.image} />
			<div className = "star--container">
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<span> (5.0) </span>
			</div>
			<h3>{props.movieInfo.name}</h3>
			<p>{props.movieInfo.genre}</p>
			<p>English</p>
		</div>
	)
}

export default MovieCard