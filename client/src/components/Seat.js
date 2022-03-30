import { useState } from 'react'

function Seat(props) {
    const [booked, setBooked] = useState((props.isbooked == true)?1:0)
    function handleClick() {
        if (booked === 0) {
            setBooked(1);
            props.setbookedSeats(prevbookedSeats => [...prevbookedSeats,props.seat_id])
        }
        else {
            setBooked(0);
            props.setbookedSeats(prevbookedSeats => prevbookedSeats.filter(seat_id => seat_id != props.seat_id))
        }
    }

    return (
        <div className={(booked === 1) ? "seat seat--booked" : "seat"} onClick={handleClick}>
            <p>{props.seat_id}</p>
        </div>
    )
}

export default Seat