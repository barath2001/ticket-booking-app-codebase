function MovieCard (props) {
	console.log(props)
	return (
        <li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.id}}>{props.movieInfo.title}</li>
	)
}

export default MovieCard