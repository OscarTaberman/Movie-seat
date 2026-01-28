import { useState } from "react";

export default function Seat() {
    const [isSelected, setIsSelected] = useState(false);

    function clickSelect() {
      setIsSelected(!isSelected);
    }

    const switchClass = isSelected ? "seat selected" : "seat";

    return (
      <div className={switchClass} onClick={clickSelect} />);
  }