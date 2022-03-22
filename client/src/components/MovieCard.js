function MovieCard (props) {
	console.log(props)
	return (
        <li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.name}</li>
	)
}

export default MovieCard