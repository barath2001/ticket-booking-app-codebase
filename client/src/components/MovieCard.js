import "./MovieCard.css"

function MovieCard (props) {
	console.log(props)
	return (
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
			
		</div>
	)
}

export default MovieCard