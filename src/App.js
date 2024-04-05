import { Outlet, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <nav>
      <h2>Bus Ticket Booking</h2>
      <ul>
        <li>
          <Link to="/">Reservation</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
