import "./MovieCard.css"
//import starIcon from "../../public/star-icon.png"

function MovieCard(props) {
	console.log(props)
	return (
		//<li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.name}</li>
		<div id={props.movieInfo.id}
		className="card" onClick={() => { window.location.href = '/movieDetails/' + props.movieInfo.id }}>
			<img className="card--image" src={props.movieInfo.image} />
			<h3>{props.movieInfo.name}</h3>
			<p>{props.movieInfo.genre}</p>
			<p>English</p>
			<div className = "star--container">
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<img className="star--icon" src="./star-icon.png" />
				<span> (5.0) </span>
			</div>
		</div>
	)
}

export default MovieCard