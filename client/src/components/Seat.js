import {useState} from 'react'

function Seat (props) {
    const [booked, setBooked] = useState(0)
    function handleClick () {
        if (booked === 0) {
            setBooked(1);
            props.setbookedSeats(prevBooked => [...prevBooked,props.id])
        }
        else {
            setBooked(0);
            props.setbookedSeats(prevBooked => prevBooked.filter(id => id!==props.id))
        }
        console.log(booked)
    }

    return (
        <div className = {(booked === 1) ? "seat seat--booked" : "seat"} onClick={handleClick}>
            {props.id}
            {":"}
            {booked}
        </div>
    )
}

export default Seat