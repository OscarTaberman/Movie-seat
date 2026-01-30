
type SeatProps = {
  isSelected: boolean;
  clickSeat: () => void;
};


export default function Seat({ isSelected, clickSeat }: SeatProps) {

    // Changes which class is selected
    const switchClass = isSelected ? "seat selected" : "seat";

    // Returns the selected class and onClick function
    return (
      <div className={switchClass} onClick={clickSeat} />
    );
  }
  
