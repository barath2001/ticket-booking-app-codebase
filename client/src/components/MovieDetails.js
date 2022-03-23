import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function MovieDetails() {
    let { id } = useParams();

    const [movieComponent, setmovieComponent] = useState([])

    useEffect(() => {
        async function getmoviedetails() {
            const response = await fetch('http://localhost:1337/api/moviedetails/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json()
            setmovieComponent( data.movieDetails )
        }
        getmoviedetails();

    }, [])
    console.log(movieComponent)
    return (
        // {movieComponent}
        <>
        <p>hekki</p>
        {movieComponent.length > 0 && movieComponent.map((movieComponent) => 
            < div key={movieComponent.id}>
                <h1>{movieComponent.name}</h1>
                <h2>{movieComponent.id}</h2>
            </div >
            )}
            </>
    )
}

export default MovieDetails