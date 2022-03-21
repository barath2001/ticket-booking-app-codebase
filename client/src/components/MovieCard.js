function MovieCard (props) {

	return (
        <li onClick={()=>{window.location.href = '/movieDetails/' + props.movieInfo.key}}>{props.movieInfo.title}</li>
	)
}

export default MovieCard