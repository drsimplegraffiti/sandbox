import react, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter(counter + 1)
    }

    const decrement =()=>{
        setCounter(counter - 1)
    }

    return (<>
        <div>{counter}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    );
}
 
export default Counter;