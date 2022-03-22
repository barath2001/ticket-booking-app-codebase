import MovieCard from './MovieCard'

function MovieList() {

    const data = [{ id: 1, title: "movie1" }, { id: 2, title: "movie2" }]
    const listItems = data.map((movieInfo) => <MovieCard key = {movieInfo.id} movieInfo={movieInfo} />)

    return (
        <div>
            {listItems}
        </div>
    )
}

export default MovieList