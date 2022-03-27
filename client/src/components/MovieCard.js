import "./MovieCard.css"
//import starIcon from "../../public/star-icon.png"

function MovieCard(props) {
	console.log(props)
	return (
<<<<<<< HEAD
        //<li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.name}</li>
		<div className="card-container"  onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>
			
			<div className="image-container">
				<img src = {props.movieInfo.image} alt="movie-img"/>
			</div>
			<div className="card-content">
				<div className="card-title">
					<h3>{props.movieInfo.name}</h3>
				</div>
				<div className="card-body">
					<p>{props.movieInfo.genre}</p>
				</div>
			</div>
			
=======
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
>>>>>>> d7375ff081d52a13b8bf55f0f03fc70e95a77830
		</div>
	)
}

export default MovieCard