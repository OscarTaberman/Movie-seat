import Seat from "./components/Seat";
import "./movie.css";

export default function App() {

  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select name="movie" id="movie" defaultValue="100">
          <option value="100">Fast and furious 6 (100 kr)</option>
          <option value="50">The mummy returns (50 kr)</option>
          <option value="70">Jumanji: Welcome to the Jungle (70 kr)</option>
          <option value="40">Rampage (40 kr)</option>
        </select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat" />
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected" />
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied" />
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen" />

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </div>

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat />
          <Seat />
          <Seat />
        </div>

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <div className="seat occupied" />
          <div className="seat occupied" />
        </div>

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </div>

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat />
          <Seat />
          <Seat />
        </div>

        <div className="row">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat />
        </div>
      </div>

      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
}
