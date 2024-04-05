// DashboardView.js
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import './DashboardView.css';

function DashboardView() {
//   const history = useHistory();
  const [passengers, setPassengers] = useState(JSON.parse(localStorage.getItem("reservations")));

  // Function to edit passenger details
  const handleEdit = (index, updatedPassenger) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = updatedPassenger;
    setPassengers(updatedPassengers);
    // localStorage.setItem('reservations', JSON.stringify(updatedPassengers));
  };
 // Function to Save passenger details
 const handleSave = (index, updatedPassenger) => {
  const updatedPassengers = [...passengers];
  updatedPassengers[index] = updatedPassenger;
  setPassengers(updatedPassengers);
  localStorage.setItem('reservations', JSON.stringify(updatedPassengers));
};

  // Function to delete a reservation
  const handleDelete = (index) => {
    const updatedPassengers = passengers.filter((_, i) => i !== index);
    setPassengers(updatedPassengers);
    localStorage.setItem('reservations', JSON.stringify(updatedPassengers));
  };

  const onNameChage = (index,e,nameIndex) =>{
    let name = e.target.value;
    const updatedPassengers = [...passengers];
    const currentPassenger = updatedPassengers[index];
    if(nameIndex==0){
      updatedPassengers[index] = {...currentPassenger,firstName:name};
    }else{
      updatedPassengers[index] = {...currentPassenger,lastName:name};
    }
    setPassengers(updatedPassengers);

  }
  const onEmailChange = (index,e) =>{
    let email = e.target.value;
    const updatedPassengers = [...passengers];
    const currentPassenger = updatedPassengers[index];
    updatedPassengers[index] = { ...currentPassenger, email: email };
    setPassengers(updatedPassengers);
  }
  const onDateChage = (index,e) =>{
    let date = e.target.value;
    const updatedPassengers = [...passengers];
    const currentPassenger = updatedPassengers[index];
    updatedPassengers[index] = {...currentPassenger,dateOfBooking:date};
    setPassengers(updatedPassengers);

  }

  return (
    <div>
      <h2>Dashboard View</h2>
      <table>
        <thead>
          <tr>
            <th>First Name: </th>
            <th>Last Name: </th>
            <th>Email: </th>
            <th>Seat Number: </th>
            <th>Date of Booking: </th>
            <th>Actions: </th>
          </tr>
        </thead>
        <tbody>
          {passengers.length >0 &&  passengers.map((passenger, index) => (
            <tr key={index}>
              <td>
                {
                 passenger.status?
                 <input type='text' value={passenger.firstName} onChange={(e)=>onNameChage(index,e,0)}/>:
                 passenger.firstName
                }                
                </td>
              <td>
                {
                 passenger.status?
                 <input type='text' value={passenger.lastName} onChange={(e)=>onNameChage(index,e,1)}/>:
                passenger.lastName
                }                
                </td>
              <td>{ passenger.status?
                 <input type='email' value={passenger.email} onChange={(e)=>onEmailChange(index,e)}/>:passenger.email}</td>
              <td>{passenger.seatNumber}</td>
              <td>{ passenger.status?
                 <input type='date' value={passenger.dateOfBooking} onChange={(e)=>onDateChage(index,e)}/>:passenger.dateOfBooking}</td>
              <td>
                {passenger.status ?
                  <button onClick={() => handleSave(index, { ...passenger, status: false })}>Save</button>
                  :
                  <button onClick={() => handleEdit(index, { ...passenger, status: true })}>Edit</button>
                }
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardView;
