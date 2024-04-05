import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import ReservationView from './components/ReservationView';
import DashboardView from './components/DashboardView';
import data from './components/data';


// let seatNumbers = Array(5).fill("").map((seat,seatNum)=>{
//   return {"seatStatus":"available","seatNum":seatNum+1}
// // });
// let seatNumbers = [
//   [{"seatNo":1,"status":true},{"seatNo":2,"status":false},{"seatNo":3,"status":false},{"seatNo":4,"status":false},{"seatNo":5,"status":true}],[{"seatNo":6,"status":true},{"seatNo":7,"status":false},{"seatNo":8,"status":false},{"seatNo":9,"status":true},{"seatNo":10,"status":false},{"seatNo":11,"status":true}],[{"seatNo":12,"status":false},{"seatNo":13,"status":true},{"seatNo":14,"status":true},{"seatNo":15,"status":false},{"seatNo":16,"status":false}]
// ];
// console.log("seatNumbers ",seatNumbers)
// localStorage.setItem("seatNumbers",JSON.stringify(seatNumbers));
data();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" >
          <Route path="/" element={<ReservationView />} />
          <Route path="/dashboard" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

