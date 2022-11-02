import React, { useState } from "react";
import Button from "./CounterButton";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(1);
    let incrementCount = () => {
        setCount(count + 1);
    };
    let decrementCount = () => {
        if (count>1) 
        setCount(count - 1);
        else
        setCount(1);
    };
    return (
        <div className="app">
            <div className="buttons">
                <Button title={"-"} action={decrementCount} /><span>{count}</span><Button title={"+"} action={incrementCount} />
            </div>
        </div>
    );
}