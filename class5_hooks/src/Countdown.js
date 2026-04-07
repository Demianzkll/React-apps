import React, { useState, useEffect } from "react";

export default function Countdown(){
    const [count, setCount] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning){return};

        if (count === 0){
            setIsRunning(false)
        };

        const interveal = setInterval(() => {
            setCount(prev => prev-1)
        }, 1000)

        return () => clearInterval(interveal)
    }, [isRunning, count])






    return(<div>
        {count}
        <br/>
        <button onClick={() => {setCount(10); setIsRunning(false);}}>Reset</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setIsRunning(true)}>Start</button>
    </div>)
}
