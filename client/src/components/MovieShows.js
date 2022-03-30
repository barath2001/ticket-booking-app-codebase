import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
function MovieShows() {
    let { id } = useParams();

    const [showComponent, setshowComponent] = useState([])

    useEffect(() => {
        async function getshowdetails() {
            const response = await fetch('http://localhost:1337/api/movieshows/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json()
            setshowComponent( data.showDetails )
        }
        getshowdetails();

    }, [])
    console.log(showComponent)
    return (
        <>
        
        {showComponent.length > 0 && showComponent.map((showComponent) => 
            
            <button onClick={()=>{window.location.href = '/seatbooking/' + showComponent.show_id}}>{showComponent.date}</button>
            
            )}
        </>
    )
}

export default MovieShows