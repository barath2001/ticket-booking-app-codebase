import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./MovieDetails.css"
function MovieDetails(props) {
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

        {movieComponent.length > 0 && movieComponent.map((movieComponent) => 
            
            < div className="details" key={movieComponent.id} style={{backgroundImage: `url(${movieComponent.bgimage})`}}>
                
                <div className="big-img">
                    <img src={movieComponent.image} alt=""/>
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{movieComponent.name}</h2>
                        <span>{movieComponent.censor}</span>
                    </div>
                    <p>{movieComponent.description}</p>
                    <p>Director {movieComponent.director}</p>
                    <p>Cast {movieComponent.cast}</p>
                    <button className="bookbtn" onClick={()=>{window.location.href = '/movieShows/' + movieComponent.id}}>Book Now</button>
                </div>
            </div >
            )}
        </>
    )
}

export default MovieDetails