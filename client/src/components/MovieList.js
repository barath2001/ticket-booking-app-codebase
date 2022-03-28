import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import "./MovieList.css"
// async function getmovies () {
//     await fetch('http://localhost:1337/api/moviedata')
//     .then(res => {
//         res.json();
//         // console.log((res));
//     })
//     .then(data => {
//         console.log(data)
//     })
// }

function MovieList() {
    const [listItems, setlistItems] = useState([])

    useEffect(() => {
        async function getmovies() {
            const response = await fetch('http://localhost:1337/api/moviedata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json()
            setlistItems(data.movieList.map((movieInfo) => <MovieCard key={movieInfo.id} movieInfo={movieInfo} />))
        }

        getmovies();

    }, [])
    //moviedata.movieList.map((movieInfo) => <MovieCard key = {movieInfo.id} movieInfo={movieInfo} />)
    //moviedata.movieList.map((movieInfo) => console.log(movieInfo))
    return (
        <>
            <div className="movielist-container">
                <h2>All movies</h2>
                <div className="basic-grid">
                    {listItems}
                </div>
            </div>
        </>
    )
}

export default MovieList