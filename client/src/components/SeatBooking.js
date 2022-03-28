import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Seat from "./Seat.js"
import "./SeatBooking.css"

function SeatBooking(props) {

    const [allSeats, setallSeats] = useState([])
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
            console.log("data",  data.showDetails.seats)
            //setallSeats(JSON.stringify(data.showDetails.seats))
            setallSeats(data.showDetails.seats)
            console.log("allSeats",allSeats)
        }
        getseatdetails();
    }, [])

    useEffect(() => {
        console.log("allseats",allSeats)
        setbookedSeats(allSeats.filter(seat => seat.booked == true).map(seat => seat.seat_id))
    }, [])

    return (
        <div className="container">
            <div className="container--left">
                <p>Seats</p>
                <div className="basic--grid">
                    {
                        allSeats.length > 0 && allSeats.map (
                            seat => <Seat key={seat.seat_id} seat_id={seat.seat_id} setbookedSeats={setbookedSeats} isbooked = {seat.booked} />
                        )
                    }
                    {/* {seatid.length > 0 && seatid.map(id => <Seat key={id} id={id} setallSeats={setallSeats} />)} */}
                </div>
            </div>
            <div className="container--right">
                <h2>Booked seats</h2>
                {
                    bookedSeats.length > 0 && bookedSeats.map(seat_id => <li>{seat_id}</li>)
                }
            </div>
        </div>
    )
}
export default SeatBooking;