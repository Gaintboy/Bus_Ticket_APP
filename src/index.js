import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavBar/NavigationBar';
import ReservationView from './components/Reservation/ReservationView';
import DashboardView from './components/DashBoard/DashboardView';
import data from './components/data';

//to get data
data();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" >
          <Route exact path="/reservation" element={<ReservationView />} />
          <Route path="/dashboard" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

