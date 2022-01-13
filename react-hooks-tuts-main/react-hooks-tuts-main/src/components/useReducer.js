import React, { useState } from "react";


//this is the former code before transforming to the useReducer
const Reducer = () => {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
                setShowText(!showText)
            }}>Click</button>
            {showText && <p>this is the text</p>}
        </div>
    );
}

export default Reducer;