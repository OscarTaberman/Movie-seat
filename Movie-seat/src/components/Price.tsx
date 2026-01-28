import { useRef, useState } from "react";

export default function Price() {
    const [value, setValue] = useState(100);

    function findPrice() {
        setValue(value);
    }
}