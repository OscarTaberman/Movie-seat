import { useState, useEffect } from "react";
import Seat from "./components/Seat";
import type { Movie } from "./components/Movies";
import "./movie.css";


export default function App() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const [moviePrice, setMoviePrice] = useState(0);

  function movieChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setMoviePrice(Number(event.target.value));
  }

  const [seatIds, setSeatIds] = useState<number[]>([]);

  function toggleSeat(seatId: number) {
    setSeatIds((current) => {
      if (current.includes(seatId)) {
        return current.filter((id) => id !== seatId);
      }

      return [...current, seatId];
    });
  }

  const selectedCount = seatIds.length;
  const totalPrice = selectedCount * moviePrice;

  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
        <select name="movie" id="movie" value={moviePrice} onChange={movieChange}>
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
          <Seat isSelected={seatIds.includes(1)} clickSeat={() => toggleSeat(1)} />
          <Seat isSelected={seatIds.includes(2)} clickSeat={() => toggleSeat(2)} />
          <Seat isSelected={seatIds.includes(3)} clickSeat={() => toggleSeat(3)} />
          <Seat isSelected={seatIds.includes(4)} clickSeat={() => toggleSeat(4)} />
          <Seat isSelected={seatIds.includes(5)} clickSeat={() => toggleSeat(5)} />
          <Seat isSelected={seatIds.includes(6)} clickSeat={() => toggleSeat(6)} />
          <Seat isSelected={seatIds.includes(7)} clickSeat={() => toggleSeat(7)} />
          <Seat isSelected={seatIds.includes(8)} clickSeat={() => toggleSeat(8)} />
        </div>

        <div className="row">
          <Seat isSelected={seatIds.includes(9)} clickSeat={() => toggleSeat(9)} />
          <Seat isSelected={seatIds.includes(10)} clickSeat={() => toggleSeat(10)} />
          <Seat isSelected={seatIds.includes(11)} clickSeat={() => toggleSeat(11)} />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat isSelected={seatIds.includes(12)} clickSeat={() => toggleSeat(12)} />
          <Seat isSelected={seatIds.includes(13)} clickSeat={() => toggleSeat(13)} />
          <Seat isSelected={seatIds.includes(14)} clickSeat={() => toggleSeat(14)} />
        </div>

        <div className="row">
          <Seat isSelected={seatIds.includes(15)} clickSeat={() => toggleSeat(15)} />
          <Seat isSelected={seatIds.includes(16)} clickSeat={() => toggleSeat(16)} />
          <Seat isSelected={seatIds.includes(17)} clickSeat={() => toggleSeat(17)} />
          <Seat isSelected={seatIds.includes(18)} clickSeat={() => toggleSeat(18)} />
          <Seat isSelected={seatIds.includes(19)} clickSeat={() => toggleSeat(19)} />
          <Seat isSelected={seatIds.includes(20)} clickSeat={() => toggleSeat(20)} />
          <div className="seat occupied" />
          <div className="seat occupied" />
        </div>

        <div className="row">
          <Seat isSelected={seatIds.includes(21)} clickSeat={() => toggleSeat(21)} />
          <Seat isSelected={seatIds.includes(22)} clickSeat={() => toggleSeat(22)} />
          <Seat isSelected={seatIds.includes(23)} clickSeat={() => toggleSeat(23)} />
          <Seat isSelected={seatIds.includes(24)} clickSeat={() => toggleSeat(24)} />
          <Seat isSelected={seatIds.includes(25)} clickSeat={() => toggleSeat(25)} />
          <Seat isSelected={seatIds.includes(26)} clickSeat={() => toggleSeat(26)} />
          <Seat isSelected={seatIds.includes(27)} clickSeat={() => toggleSeat(27)} />
          <Seat isSelected={seatIds.includes(28)} clickSeat={() => toggleSeat(28)} />
        </div>

        <div className="row">
          <Seat isSelected={seatIds.includes(29)} clickSeat={() => toggleSeat(29)} />
          <Seat isSelected={seatIds.includes(30)} clickSeat={() => toggleSeat(30)} />
          <Seat isSelected={seatIds.includes(31)} clickSeat={() => toggleSeat(31)} />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat isSelected={seatIds.includes(32)} clickSeat={() => toggleSeat(32)} />
          <Seat isSelected={seatIds.includes(33)} clickSeat={() => toggleSeat(33)} />
          <Seat isSelected={seatIds.includes(34)} clickSeat={() => toggleSeat(34)} />
        </div>

        <div className="row">
          <Seat isSelected={seatIds.includes(35)} clickSeat={() => toggleSeat(35)} />
          <Seat isSelected={seatIds.includes(36)} clickSeat={() => toggleSeat(36)} />
          <Seat isSelected={seatIds.includes(37)} clickSeat={() => toggleSeat(37)} />
          <Seat isSelected={seatIds.includes(38)} clickSeat={() => toggleSeat(38)} />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <Seat isSelected={seatIds.includes(39)} clickSeat={() => toggleSeat(39)} />
        </div>
      </div>

      <p className="priceText">
        You have selected <span id="count">{selectedCount}</span> seats for a price of $
        <span id="total">{totalPrice}</span>
      </p>
    </>
  );
}
