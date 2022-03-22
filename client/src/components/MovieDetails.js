import { useParams } from "react-router-dom";

function MovieDetails () {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>movie details</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default MovieDetails