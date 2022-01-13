import React, {useRef} from "react";


const UseRefHooks = () => {
    const inputRef = useRef(null);
    const onClick = ()=>{
        inputRef.current.focus() // this focuses on the input
        // inputRef.current.value = '' // this clears the input
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <h1>Joseph</h1>
            <input type="text" placeholder="Ex.....here" ref={inputRef} />
            <button onClick={onClick}>Change name</button>
        </div>
    );
}

export default UseRefHooks;