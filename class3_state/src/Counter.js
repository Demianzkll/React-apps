import { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("");

    useEffect(() => {
    if (count === 0) {
      setMessage("Minimum reached");
    } else if (count === 10) {
      setMessage("Maximum reached");
    } else {
      setMessage("");
    }
    }, [count]);

    return <div>
        <button onClick={count < 10 ? () => setCount(count+1) : () => setMessage("Maximum reached")}>+</button>
        <div>{count}</div>
        <button onClick={count > 0 ? () => setCount(count-1) : () => setMessage("Minimum reached")}>-</button>
        <p>{message}</p>
    </div>
}


export default Counter;



