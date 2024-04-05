// ReservationView.js
import React, { useEffect, useState } from 'react';
import Seat from './Seat';
import './ReservationView.css'

const ReservationView = () => {
  const [deck, setdeck] = useState(JSON.parse(localStorage.getItem("deck")));

  useEffect(()=>{

    // let seat = seats;
    // seat[1]["status"] = false;
    // setSeats(seat);

  },[]);

  const onSelectSeat = (deckIndex,seatRowIndex,seatIndex)=>{

    let deckTemp = [...deck];
    console.log("deckTemp ",deckTemp);
    deckTemp[deckIndex].seats[seatRowIndex][seatIndex]["status"] = !deckTemp[deckIndex].seats[seatRowIndex][seatIndex]["status"];
    setdeck(deckTemp); 
    localStorage.setItem('deck', JSON.stringify(deckTemp));

  }

  return (
    <div className="bus-seat-selection">
      <h3 className='viewTitle'>Reservation View</h3>
      <p className='seatMsg'>Click on an Available seat to select/deselect</p>
      {
        deck.map((deck,deckIndex)=>(
      <div key={deckIndex} className="deck">
        <h3 className='deckName'>{deck.DECK}</h3>
        {
              deck.seats.length>0 && deck.seats.map((seatRow,seatRowIndex) => (
                <div className={`seat-row ${seatRowIndex == 3?"last":""}`} key={seatRowIndex}>
                  {seatRow.map((seat,seatIndex) => (
                    // <Seat key={index} seatNumber={index} reserved={seat !== null} />
                    <div key={seatIndex}>
                      <button className={`seat ${seat.status ? "booked" : "available"} ${[3,12,14].includes(seat.seatNo) ? "female" : ""}  ${seat.seatNo == 11 ? "spl" : ""}`} disabled={seat.status} onClick={()=>onSelectSeat(deckIndex,seatRowIndex,seatIndex)}>{seat.seatNo}</button>
                    </div>
                  ))}
                </div>
          ))
        }
      </div>

        ))
      }
    </div>
  );
}

export default ReservationView;
