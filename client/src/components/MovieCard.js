import "./MovieCard.css"

function MovieCard (props) {
	console.log(props)
	return (
        //<li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.name}</li>
		<div onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>
			<img src = {props.movieInfo.image}/>
			<div>
				<h2>{props.movieInfo.name}</h2>
				<p>{props.movieInfo.genre}</p>
			</div>
		</div>
	)
}

export default MovieCard