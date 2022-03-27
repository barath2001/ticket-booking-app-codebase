import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Seat from "./Seat.js"
import "./SeatBooking.css"

function SeatBooking(props) {

    const [bookedSeats, setbookedSeats] = useState([])
    let { showid } = useParams();

    useEffect(() => {
        async function getseatdetails() {
            const response = await fetch('http://localhost:1337/api/getseats/' + showid, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json()
            console.log("data",  data)
            setbookedSeats(JSON.stringify(data.seats))
            console.log("bookedSeats",bookedSeats)
        }
        getseatdetails();
    }, [bookedSeats,showid])

    return (
        <div className="container">
            <div className="container--left">
                <p>Seats</p>
                <div className="basic--grid">
                    {
                        // bookedSeats.length > 0 &&
                        // bookedSeats.map(
                            
                        // )
                    }
                    {/* {seatid.length > 0 && seatid.map(id => <Seat key={id} id={id} setbookedSeats={setbookedSeats} />)} */}
                </div>
            </div>
            <div className="container--right">
                <h2>Booked seats</h2>
                <p>{bookedSeats}</p>
            </div>
        </div>
    )
}
export default SeatBooking;